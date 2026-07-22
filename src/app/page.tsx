"use client";

import { useState } from "react";

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

const AppleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.2.04a9.576 9.576 0 00-1.92-.04H6.72a9.576 9.576 0 00-1.92.04 5.022 5.022 0 00-2.374.852C1.308 1.625.563 2.624.246 3.934a9.23 9.23 0 00-.24 2.19C0 6.506 0 6.887 0 7.269v9.462c0 .382 0 .763.006 1.145a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 002.374.852c.64.068 1.28.08 1.92.04h10.56c.64.04 1.28.028 1.92-.04a5.022 5.022 0 002.374-.852c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.006-.382.006-.763.006-1.145V7.269c0-.382 0-.763-.006-1.145z"/>
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    {open ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <>
        <path strokeLinecap="round" d="M4 7h16" />
        <path strokeLinecap="round" d="M4 17h16" />
      </>
    )}
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">

      {/* ─── Header ─────────────────────────────────────────────────── */}
      <header className="header">
        <div className="header-inner">
          <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer">Contact</a>
          </nav>

          <a href="#" className="header-logo">
            <img src="/megriot-logo.jpeg" alt="Meg Riot" />
          </a>

          <div className="header-socials">
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon size={18} /></a>
            <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon size={18} /></a>
            <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><SpotifyIcon size={18} /></a>
          </div>

          <button className="header-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="mobile-socials">
            <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
            <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon size={20} /></a>
            <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon size={20} /></a>
            <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><SpotifyIcon size={20} /></a>
          </div>
        </div>
      </header>

      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/Vjz3lkueiC0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="hero-video"
            allow="autoplay"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <img src="/megband.jpg" alt="Meg Riot" className="hero-album-art" />
          </div>
          <div className="hero-right">
            <span className="hero-label">Punk Rock</span>
            <h1 className="hero-title">Meg Riot</h1>
            <p className="hero-sub">Almada, Portugal</p>
            <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Listen Now
            </a>
          </div>
        </div>
        <div className="streaming-links">
          <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer" className="stream-icon" aria-label="Spotify"><SpotifyIcon size={22} /></a>
          <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer" className="stream-icon" aria-label="Apple Music"><AppleIcon size={22} /></a>
          <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer" className="stream-icon" aria-label="YouTube"><YouTubeIcon size={22} /></a>
        </div>
      </section>

      {/* ─── Newsletter ─────────────────────────────────────────────── */}
      <section className="newsletter">
        <h2>Stay in the Loop</h2>
        <p>Get the latest news, tour dates, and exclusive content before anyone else.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      {/* ─── Music Video ────────────────────────────────────────────── */}
      <section className="video-section">
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/Vjz3lkueiC0"
            title="Meg Riot - Official Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* ─── About ──────────────────────────────────────────────────── */}
      <section id="about" className="about">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title">About</h2>
            <p>
              Meg Riot is a punk rock band from Almada, Portugal. Formed in late 2025, the band brings raw energy and unapologetic attitude to the stage.
            </p>
            <p>
              With a sound rooted in classic punk and modern rock, Meg Riot is here to make noise. Francisco on guitar, Kat on vocals, Joao on bass, and Bruno on drums.
            </p>
          </div>
          <div className="about-photo">
            <img src="/megband.jpg" alt="Meg Riot band" />
          </div>
        </div>
      </section>

      {/* ─── Merch ──────────────────────────────────────────────────── */}
      <section className="merch">
        <h2 className="section-title">Merch</h2>
        <div className="merch-grid">
          <div className="merch-item">
            <img src="/merch2.jpeg" alt="Meg Riot T-Shirt" />
          </div>
          <div className="merch-item">
            <img src="/merch1.jpeg" alt="Meg Riot Poster" />
          </div>
        </div>
        <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Shop Now
        </a>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────── */}
      <footer className="footer">
        <span>&copy; 2026 Meg Riot</span>
        <div className="footer-socials">
          <a href="https://instagram.com/megriotband" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
          <a href="https://www.youtube.com/@MegRiot" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon size={18} /></a>
          <a href="https://www.tiktok.com/@meg.riot" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon size={18} /></a>
          <a href="https://open.spotify.com/artist/4fEkG8oXmnMeFfMRPnGQp2" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><SpotifyIcon size={18} /></a>
        </div>
      </footer>

    </div>
  );
}
