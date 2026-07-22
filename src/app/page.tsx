"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const SpotifyIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const EmailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    {open ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <>
        <path strokeLinecap="round" d="M4 7h16" />
        <path strokeLinecap="round" d="M4 12h16" />
        <path strokeLinecap="round" d="M4 17h16" />
      </>
    )}
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Band", href: "#band" },
  { label: "Music", href: "#music" },
  { label: "Tour", href: "#tour" },
  { label: "Merch", href: "#merch" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const members = [
  { name: "Francisco", role: "Guitar" },
  { name: "Kat", role: "Vocals" },
  { name: "Joao", role: "Bass" },
  { name: "Bruno", role: "Drums" },
];

const merchItems = [
  { name: "Meg Riot T-Shirt", price: "15 \u20ac", image: "/merch2.jpeg" },
  { name: "Meg Riot Poster", price: "10 \u20ac", image: "/merch1.jpeg" },
  { name: "Meg Riot Sticker Pack", price: "5 \u20ac", image: "/megriot-logo.jpeg" },
];

const galleryImages = [
  { src: "/megband.jpg", alt: "Meg Riot band photo" },
  { src: "/merch1.jpeg", alt: "Meg Riot merch" },
  { src: "/merch2.jpeg", alt: "Meg Riot t-shirt" },
  { src: "/megriot-logo.jpeg", alt: "Meg Riot logo" },
];

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "-40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealDiv({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}>
      {children}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevImg = useCallback(() => setGalleryIdx((i) => (i === 0 ? galleryImages.length - 1 : i - 1)), []);
  const nextImg = useCallback(() => setGalleryIdx((i) => (i === galleryImages.length - 1 ? 0 : i + 1)), []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ─── Header ─────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className={`max-w-7xl mx-auto px-5 md:px-8 transition-all duration-500 ${scrolled ? "bg-white/[0.04] backdrop-blur-2xl border border-white/[0.06] rounded-2xl mx-4 md:mx-8 px-5 py-3" : ""}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <img src="/megriot-logo.jpeg" alt="Meg Riot" className="h-7 md:h-8 w-auto object-contain" />
              <span className="text-sm font-bold tracking-wider uppercase hidden sm:block">Meg Riot</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}
                  className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-300">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-white/30 hover:text-white/70 hover:bg-white/[0.04] transition-all">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-white/30 hover:text-white/70 hover:bg-white/[0.04] transition-all">
                <YouTubeIcon size={16} />
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-white/50 hover:bg-white/[0.04] transition-all">
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mx-4 mt-2 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-5">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/[0.06]">
              <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-white/30 hover:text-white hover:bg-white/[0.04] transition-all"><InstagramIcon size={18} /></a>
              <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-white/30 hover:text-white hover:bg-white/[0.04] transition-all"><YouTubeIcon size={18} /></a>
              <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-white/30 hover:text-white hover:bg-white/[0.04] transition-all"><TikTokIcon size={18} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/Vjz3lkueiC0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30"
            allow="autoplay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#ff3232]/[0.04] blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#ff6b6b]/[0.03] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <RevealDiv>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3232] animate-pulse" />
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em]">Punk Rock &middot; Almada, Portugal</span>
            </div>
          </RevealDiv>

          <RevealDiv delay={1}>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-[-0.04em] uppercase leading-[0.85]">
              <span className="text-gradient">Meg Riot</span>
            </h1>
          </RevealDiv>

          <RevealDiv delay={2}>
            <p className="mt-6 text-base md:text-lg text-white/25 font-light tracking-wide max-w-md mx-auto">
              Raw energy. Unapologetic attitude.
            </p>
          </RevealDiv>

          <RevealDiv delay={3}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#music"
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Listen Now <ArrowIcon />
              </a>
              <a href="#band"
                className="flex items-center gap-2.5 px-7 py-3.5 bg-white/[0.04] text-white/60 font-medium text-sm rounded-full border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-all">
                About the Band
              </a>
            </div>
          </RevealDiv>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/[0.12] flex justify-center p-1.5">
            <div className="w-1 h-2 bg-white/30 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Band ───────────────────────────────────────────────────── */}
      <section id="band" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <RevealDiv>
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#ff3232]/[0.06] rounded-3xl blur-xl group-hover:bg-[#ff3232]/[0.1] transition-all duration-700" />
              <img src="/megband.jpg" alt="Meg Riot band"
                className="relative w-full aspect-[4/5] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </RevealDiv>

          <div>
            <RevealDiv>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">About</span>
            </RevealDiv>
            <RevealDiv delay={1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-6">
                <span className="text-gradient">The Band</span>
              </h2>
            </RevealDiv>
            <RevealDiv delay={2}>
              <p className="text-white/35 leading-[1.9] mb-10 text-base md:text-lg">
                Meg Riot is a punk rock band from Almada, Portugal. Formed in late 2025, the band brings raw energy and unapologetic attitude to the stage. With a sound rooted in classic punk and modern rock, Meg Riot is here to make noise.
              </p>
            </RevealDiv>
            <RevealDiv delay={3}>
              <div className="grid grid-cols-2 gap-3">
                {members.map((m) => (
                  <div key={m.name} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group cursor-default">
                    <p className="font-semibold text-sm text-white/70 group-hover:text-white transition-colors">{m.name}</p>
                    <p className="text-xs text-white/20 mt-0.5">{m.role}</p>
                  </div>
                ))}
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ─── Music ──────────────────────────────────────────────────── */}
      <section id="music" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <RevealDiv>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Stream</span>
          </RevealDiv>
          <RevealDiv delay={1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-16">
              <span className="text-gradient">Music</span>
            </h2>
          </RevealDiv>
          <RevealDiv delay={2}>
            <div className="max-w-lg mx-auto glow rounded-2xl overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/artist/4fEkG8oXmnMeFfMRPnGQp2?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Tour ───────────────────────────────────────────────────── */}
      <section id="tour" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <RevealDiv>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />
              <img src="/megband.jpg" alt="" className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="px-8 md:px-12">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Live</span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2 mb-3">
                    <span className="text-gradient">No Shows Yet</span>
                  </h2>
                  <p className="text-sm text-white/30 mb-6">Follow us for tour date announcements</p>
                  <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <InstagramIcon size={16} /> Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Merch ──────────────────────────────────────────────────── */}
      <section id="merch" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <RevealDiv>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Store</span>
            </RevealDiv>
            <RevealDiv delay={1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3">
                <span className="text-gradient">Merch</span>
              </h2>
            </RevealDiv>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchItems.map((item, i) => (
              <RevealDiv key={i} delay={i as 0 | 1 | 2}>
                <div className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img src={item.image} alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm text-white/70">{item.name}</p>
                      <p className="font-bold text-sm text-[#ff3232]">{item.price}</p>
                    </div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="mt-10 text-center">
              <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/[0.04] text-white/60 font-medium text-sm rounded-full border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-all">
                <InstagramIcon size={16} /> Order via Instagram <ArrowIcon />
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Videos ─────────────────────────────────────────────────── */}
      <section id="videos" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <RevealDiv>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Watch</span>
            </RevealDiv>
            <RevealDiv delay={1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3">
                <span className="text-gradient">Videos</span>
              </h2>
            </RevealDiv>
          </div>

          <RevealDiv>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/[0.06]">
                <iframe
                  src="https://www.youtube.com/embed/Vjz3lkueiC0"
                  title="Meg Riot"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </RevealDiv>

          {/* Gallery */}
          <RevealDiv>
            <div className="mt-16 relative max-w-2xl mx-auto">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.06]">
                <img src={galleryImages[galleryIdx].src} alt={galleryImages[galleryIdx].alt}
                  className="w-full h-full object-cover" />
              </div>
              <button onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all">
                <ChevronLeft />
              </button>
              <button onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all">
                <ChevronRight />
              </button>
              <div className="flex justify-center gap-2 mt-5">
                {galleryImages.map((_, i) => (
                  <button key={i} onClick={() => setGalleryIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === galleryIdx ? "bg-[#ff3232] w-6" : "bg-white/20 hover:bg-white/40"}`} />
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Socials ────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <RevealDiv>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Connect</span>
          </RevealDiv>
          <RevealDiv delay={1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-16">
              <span className="text-gradient">Follow Us</span>
            </h2>
          </RevealDiv>
          <RevealDiv delay={2}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <InstagramIcon size={18} />, label: "@megriotband", href: "https://instagram.com/megriotband", color: "hover:border-pink-500/40" },
                { icon: <YouTubeIcon size={18} />, label: "@MegRiot", href: "https://www.youtube.com/@MegRiot", color: "hover:border-red-500/40" },
                { icon: <TikTokIcon size={18} />, label: "@meg.riot", href: "https://www.tiktok.com/@meg.riot", color: "hover:border-white/20" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${s.color}`}>
                  {s.icon}
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Contact ────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-28 md:py-40 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <RevealDiv>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Reach Out</span>
          </RevealDiv>
          <RevealDiv delay={1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-6">
              <span className="text-gradient">Contact</span>
            </h2>
          </RevealDiv>
          <RevealDiv delay={2}>
            <p className="text-white/30 mb-12 text-base md:text-lg max-w-xl mx-auto">
              For booking and merch, send us an email or a DM on Instagram.
            </p>
          </RevealDiv>
          <RevealDiv delay={3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-7 py-4 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <InstagramIcon size={18} /> DM on Instagram <ArrowIcon />
              </a>
              <a href="mailto:megriotmusic@gmail.com"
                className="group flex items-center justify-center gap-3 px-7 py-4 bg-white/[0.04] text-white/60 font-medium text-sm rounded-full border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-all">
                <EmailIcon size={18} /> megriotmusic@gmail.com
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ─── Newsletter ─────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-24 px-5 md:px-8">
        <RevealDiv>
          <div className="max-w-xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff3232]/70">Stay Updated</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2 mb-3">Newsletter</h3>
            <p className="text-sm text-white/25 mb-6">Get the latest news, tour dates, and exclusive content.</p>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3232]/40 transition-colors" />
              <button type="submit"
                className="px-6 py-3 rounded-full bg-[#ff3232] text-white text-sm font-bold hover:bg-[#ff4040] transition-all hover:scale-[1.02] active:scale-[0.98]">
                Subscribe
              </button>
            </form>
          </div>
        </RevealDiv>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { icon: <InstagramIcon size={16} />, href: "https://instagram.com/megriotband" },
                { icon: <YouTubeIcon size={16} />, href: "https://www.youtube.com/@MegRiot" },
                { icon: <TikTokIcon size={16} />, href: "https://www.tiktok.com/@meg.riot" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Streaming links */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-semibold mr-1">Listen on</span>
              <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954] hover:scale-110 transition-all">
                <SpotifyIcon size={14} />
              </a>
              <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FA233B]/20 flex items-center justify-center text-[#FA233B] hover:scale-110 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.2.04a9.576 9.576 0 00-1.92-.04H6.72a9.576 9.576 0 00-1.92.04 5.022 5.022 0 00-2.374.852C1.308 1.625.563 2.624.246 3.934a9.23 9.23 0 00-.24 2.19C0 6.506 0 6.887 0 7.269v9.462c0 .382 0 .763.006 1.145a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 002.374.852c.64.068 1.28.08 1.92.04h10.56c.64.04 1.28.028 1.92-.04a5.022 5.022 0 002.374-.852c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.006-.382.006-.763.006-1.145V7.269c0-.382 0-.763-.006-1.145zM17.994 15.95l-.003.006c-1.37 2.438-3.764 3.96-6.59 4.037a7.155 7.155 0 01-.863.027c-3.69 0-6.72-2.85-6.967-6.457-.027-.412-.027-.823-.027-1.235V8.54c0-.28.006-.56.02-.839.192-3.047 2.58-5.55 5.613-5.86a7.062 7.062 0 01.816-.027c2.537 0 4.73 1.37 5.88 3.41.15.267.283.543.4.827.063.15.117.303.163.458l.013.044v8.294l-.003.018-.003.006-.5.002z"/></svg>
              </a>
              <a href="https://tidal.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 hover:scale-110 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 3.992L8.008 7.996 12.012 12l4.004-4.004zM4.004 3.992L0 7.996l4.004 4.004L8.008 7.996zM12.012 12.004L8.008 16.008l4.004 4.004 4.004-4.004zM20.02 3.992l-4.004 4.004L20.02 12l4.004-4.004z"/></svg>
              </a>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-white/[0.04]">
            <p className="text-[10px] text-white/15 uppercase tracking-[0.2em]">&copy; 2026 Meg Riot. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
