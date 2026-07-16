"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#band", label: "Band" },
    { href: "#media", label: "Media" },
    { href: "#tour", label: "Tour" },
    { href: "#merch", label: "Merch" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <h1 className="text-base md:text-lg font-semibold tracking-tight uppercase">Meg Riot</h1>
          <nav className="hidden md:flex gap-8 text-sm text-white font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-zinc-300 transition-colors">{link.label}</a>
            ))}
          </nav>
          <button
            className="md:hidden text-white p-2 -mr-2"
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
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <nav className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base text-white font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-[80vh] md:h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <p className="uppercase text-white/80 mb-4 md:mb-6" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', letterSpacing: '0.2em' }}>
            Punk Rock &bull; Almada, Portugal
          </p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 md:mb-6 text-white drop-shadow-lg" style={{ fontSize: 'clamp(3.75rem, 10vw, 10rem)' }}>
            Meg Riot
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-md mx-auto mt-6 md:mt-8" style={{ textShadow: '0 2px 10px rgb(0,0,0,0.8)' }}>
            Raw energy. Unapologetic attitude.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="band" className="section-overlay relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-3 md:mb-4">About</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12">The Band</h3>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 md:mb-16">
            Meg Riot is a punk rock band from Almada, Portugal. Formed in late 2025,
            the band brings raw energy and unapologetic attitude to the stage.
            With a sound rooted in classic punk and modern rock, Meg Riot is here to make noise.
          </p>
          <img src="/megband.jpg" alt="Meg Riot band" className="rounded-2xl md:rounded-3xl w-48 md:w-96 h-auto mx-auto mb-8 md:mb-12" />
          <p className="text-base md:text-lg text-white/80">
            Francisco - Guitar &bull; Kat - Vocals &bull; Joao - Bass &bull; Bruno - Drums
          </p>
        </div>
      </section>

      <section id="media" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-3 md:mb-4">Follow</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12">Media</h3>
          <ul className="space-y-4 md:space-y-6 inline-block">
            <li>
              <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-4 p-5 md:p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-lg md:text-2xl font-semibold">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-4 p-5 md:p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-lg md:text-2xl font-semibold">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-4 p-5 md:p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span className="text-lg md:text-2xl font-semibold">TikTok</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="tour" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-3 md:mb-4">Live</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12">Upcoming Shows</h3>
          <ul className="space-y-4 md:space-y-6 inline-block">
            <li>
              <div className="inline-flex items-center gap-4 p-5 md:p-8 rounded-2xl bg-black/50 border border-white/10">
                <div className="text-center min-w-[50px]">
                  <p className="text-3xl md:text-4xl font-bold">18</p>
                  <p className="text-xs md:text-sm text-white/60 uppercase">Jul</p>
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-semibold">Punks &amp; Pints</p>
                  <p className="text-white/60 text-sm md:text-base">Fermentage Brewpub</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="merch" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-3 md:mb-4">Store</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12">Merch</h3>
          <div className="flex justify-center">
            <div className="rounded-2xl md:rounded-3xl bg-black/50 border border-white/10 overflow-hidden max-w-md w-full">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('/merch2.jpeg')" }} />
              <div className="p-5 md:p-8">
                <p className="text-xl md:text-2xl font-semibold mb-2">Meg Riot T-Shirt</p>
                <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
                  className="block md:inline-block px-6 py-3 rounded-full bg-white text-black font-semibold text-sm text-center hover:bg-zinc-200 transition-colors">
                  Order via Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/80 mt-8 md:mt-12 text-center">15 &euro;</p>
        </div>
      </section>

      <section id="contact" className="section-overlay relative py-20 md:py-32 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-3 md:mb-4">Reach Out</p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12">Contact</h3>
          <p className="text-base md:text-xl text-white/80 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            For booking and merch, send us a DM on Instagram.
          </p>
          <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-4 p-5 md:p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
            <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="text-lg md:text-2xl font-semibold">DM on Instagram</span>
          </a>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 md:px-6 text-center text-xs md:text-sm text-white" style={{ textShadow: '0 1px 3px rgb(0,0,0,0.8)' }}>
        <p>&copy; 2026 Meg Riot. All rights reserved.</p>
      </footer>
    </>
  );
}
