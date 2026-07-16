const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const UPLOAD_DIR = path.join(__dirname, "public");

const html = `<!DOCTYPE html>
<html>
<head><title>File Transfer</title></head>
<body style="font-family:sans-serif;max-width:400px;margin:50px auto;text-align:center">
  <h2>Upload File</h2>
  <form method="POST" enctype="multipart/form-data" action="/upload">
    <input type="file" name="file" /><br/><br/>
    <button type="submit" style="padding:10px 20px">Upload</button>
  </form>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.method === "POST" && req.url === "/upload") {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const body = Buffer.concat(chunks);
      const boundary = req.headers["content-type"].split("boundary=")[1];
      const parts = body.toString("binary").split("--" + boundary);
      for (const part of parts) {
        const fileMatch = part.match(/filename="(.+?)"/);
        if (fileMatch) {
          const filename = fileMatch[1];
          const headerEnd = part.indexOf("\r\n\r\n") + 4;
          const fileData = Buffer.from(part.slice(headerEnd, part.lastIndexOf("\r\n")), "binary");
          fs.writeFileSync(path.join(UPLOAD_DIR, filename), fileData);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`<h2>Uploaded: ${filename}</h2><a href="/">Back</a>`);
          return;
        }
      }
      res.writeHead(400);
      res.end("No file");
    });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  const os = require("os");
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        console.log(`\n  Open on iPhone: http://${net.address}:${PORT}\n`);
      }
    }
  }
});
