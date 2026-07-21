"use client";

import { useState } from "react";

const translations = {
  en: {
    nav: ["Band", "Media", "Tour", "Merch", "Contact"],
    heroTagline: "Raw energy. Unapologetic attitude.",
    bandLabel: "About",
    bandTitle: "The Band",
    bandText: "Meg Riot is a punk rock band from Almada, Portugal. Formed in late 2025, the band brings raw energy and unapologetic attitude to the stage. With a sound rooted in classic punk and modern rock, Meg Riot is here to make noise.",
    members: "Francisco - Guitar \u2022 Kat - Vocals \u2022 Joao - Bass \u2022 Bruno - Drums",
    mediaLabel: "Follow",
    mediaTitle: "Media",
    tourLabel: "Live",
    tourTitle: "Upcoming Shows",
    merchLabel: "Store",
    merchTitle: "Merch",
    merchItem: "Meg Riot T-Shirt",
    merchOrder: "Order via Instagram",
    contactLabel: "Reach Out",
    contactTitle: "Contact",
    contactText: "For booking and merch, send us an Email or a DM on Instagram.",
    contactDM: "DM on Instagram",
    contactEmail: "Send us an Email",
    footer: "\u00a9 2026 Meg Riot. All rights reserved.",
  },
  pt: {
    nav: ["Banda", "M\u00e9dia", "Espet\u00e1culos", "Merch", "Contacto"],
    heroTagline: "Energia crua. Atitude sem desculpas.",
    bandLabel: "Sobre",
    bandTitle: "A Banda",
    bandText: "Meg Riot \u00e9 uma banda de punk rock de Almada, Portugal. Formada no final de 2025, a banda traz energia crua e atitude sem desculpas ao palco. Com um som enraizado no punk cl\u00e1ssico e rock moderno, o Meg Riot est\u00e1 aqui para fazer barulho.",
    members: "Francisco - Guitarra \u2022 Kat - Vocal \u2022 Joao - Baixo \u2022 Bruno - Bateria",
    mediaLabel: "Seguir",
    mediaTitle: "M\u00e9dia",
    tourLabel: "Ao Vivo",
    tourTitle: "Pr\u00f3ximos Espet\u00e1culos",
    merchLabel: "Loja",
    merchTitle: "Merch",
    merchItem: "T-Shirt Meg Riot",
    merchOrder: "Encomendar via Instagram",
    contactLabel: "Falar Connosco",
    contactTitle: "Contacto",
    contactText: "Para booking e merch, envia-nos um Email ou DM no Instagram.",
    contactDM: "DM no Instagram",
    contactEmail: "Envia-nos um Email",
    footer: "\u00a9 2026 Meg Riot. Todos os direitos reservados.",
  },
};

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-8 h-8 md:w-10 md:h-10 shrink-0"} viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-8 h-8 md:w-10 md:h-10 shrink-0"} viewBox="0 0 24 24" fill="white">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-8 h-8 md:w-10 md:h-10 shrink-0"} viewBox="0 0 24 24" fill="white">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-8 h-8 md:w-10 md:h-10 shrink-0"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = translations[lang];

  const navLabels = t.nav;
  const navHrefs = ["#band", "#media", "#tour", "#merch", "#contact"];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <button className="text-base md:text-lg font-semibold tracking-tight uppercase text-white cursor-pointer">Meg Riot</button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLabels.map((label, i) => (
              <a key={navHrefs[i]} href={navHrefs[i]} className="text-white/90 hover:text-white transition-colors cursor-pointer">{label}</a>
            ))}
            <div className="flex items-center gap-1 ml-2 border-l pl-4 border-white/20">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-bold rounded transition-colors ${lang === "en" ? "bg-white text-black" : "text-white/90 hover:text-white"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("pt")}
                className={`px-2 py-1 text-xs font-bold rounded transition-colors ${lang === "pt" ? "bg-white text-black" : "text-white/90 hover:text-white"}`}
              >
                PT
              </button>
            </div>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="p-2 -mr-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-black border-white/10">
            <nav className="px-4 py-4 space-y-3">
              {navLabels.map((label, i) => (
                <a
                  key={navHrefs[i]}
                  href={navHrefs[i]}
                  className="block text-base font-medium py-2 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 text-sm font-bold rounded transition-colors ${lang === "en" ? "bg-white text-black" : "text-white/90 hover:text-white"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("pt")}
                  className={`px-3 py-1 text-sm font-bold rounded transition-colors ${lang === "pt" ? "bg-white text-black" : "text-white/90 hover:text-white"}`}
                >
                  PT
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="section-overlay relative min-h-[80vh] md:h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="relative z-10 text-center px-4">
          <p className="uppercase mb-4 md:mb-6 text-white/90" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', letterSpacing: '0.2em' }}>
            Punk Rock &bull; Almada, Portugal
          </p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 md:mb-6 text-white" style={{ fontSize: 'clamp(3.75rem, 10vw, 10rem)' }}>
            Meg Riot
          </h2>
          <p className="text-base md:text-xl max-w-md mx-auto mt-6 md:mt-8 text-white">
            {t.heroTagline}
          </p>
          <div className="mt-24 md:mt-40 animate-bounce transition-opacity duration-500">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section id="band" className="section-overlay relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 text-white/80">{t.bandLabel}</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 text-white">{t.bandTitle}</h3>
          <p className="text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 md:mb-16 text-white">
            {t.bandText}
          </p>
          <img src="/megband.jpg" alt="Meg Riot band" className="rounded-2xl md:rounded-3xl w-full max-w-sm md:w-96 h-auto mx-auto mb-8 md:mb-12" />
          <p className="text-base md:text-lg text-white">
            {t.members}
          </p>
        </div>
      </section>

      <section id="media" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 text-white/80">{t.mediaLabel}</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 text-white">{t.mediaTitle}</h3>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe src="https://www.youtube.com/embed/Vjz3lkueiC0" title="Meg Riot" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl border p-6 text-center transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-pink-500/50">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                  <InstagramIcon />
                </div>
              </div>
              <p className="text-sm text-white/80">@megriotband</p>
              <p className="text-xl font-bold mt-1 text-white">Instagram</p>
              <p className="text-xs mt-3 text-white">Follow for behind the scenes</p>
            </a>
            <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl border p-6 text-center transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-red-500/50">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                  <YouTubeIcon />
                </div>
              </div>
              <p className="text-sm text-white/80">@MegRiot</p>
              <p className="text-xl font-bold mt-1 text-white">YouTube</p>
              <p className="text-xs mt-3 text-white">Live performances &amp; videos</p>
            </a>
            <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl border p-6 text-center transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-cyan-400/50">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border border-white/20">
                  <TikTokIcon />
                </div>
              </div>
              <p className="text-sm text-white/80">@meg.riot</p>
              <p className="text-xl font-bold mt-1 text-white">TikTok</p>
              <p className="text-xs mt-3 text-white">Short clips &amp; chaos</p>
            </a>
          </div>
        </div>
      </section>

      <section id="tour" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 text-white/80">{t.tourLabel}</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 text-white">{t.tourTitle}</h3>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-lg mx-auto">No shows scheduled yet — follow us on Instagram for updates.</p>
          <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-pink-500/50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">Instagram</span>
          </a>
        </div>
      </section>

      <section id="merch" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 text-white/80">{t.merchLabel}</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 text-white">{t.merchTitle}</h3>
          <div className="flex justify-center">
            <div className="rounded-2xl md:rounded-3xl border overflow-hidden max-w-md w-full bg-white/5 border-white/10">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('/merch2.jpeg')" }} />
              <div className="p-5 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xl md:text-2xl font-semibold text-white">{t.merchItem}</p>
                  <p className="text-xl md:text-2xl text-white">15 &euro;</p>
                </div>
                <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-pink-500/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-white">{t.merchOrder}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 text-white/80">{t.contactLabel}</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 text-white">{t.contactTitle}</h3>
          <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto text-white">
            {t.contactText}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-pink-500/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold text-white">{t.contactDM}</span>
            </a>
            <a href="mailto:megriotmusic@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:scale-105 bg-white/5 border-white/10 hover:border-cyan-400/50">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/20">
                <EmailIcon className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold text-white">{t.contactEmail}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 md:px-6 text-center text-xs md:text-sm text-black">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
