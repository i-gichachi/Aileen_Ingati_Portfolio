'use client'

import Link from 'next/link'
import { profile } from '@/data/profile'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0D2B1F', borderTop: '1px solid rgba(160, 120, 74, 0.4)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 'clamp(5rem, 8vw, 7rem)', paddingBottom: '2rem' }} className="px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair-display)', color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Aileen Ingati
            </h3>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', marginBottom: '0.75rem' }} />
            <p style={{ fontFamily: 'var(--font-inter)', color: '#C4976A', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem' }}>
              Senior Legal Counsel &amp; IP Specialist
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '260px' }}>
              Senior Legal Counsel and IP Specialist serving East Africa and beyond.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
                Navigation
              </p>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.25)' }} />
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/counsel', label: 'Counsel' },
                { href: '/practice-areas', label: 'Practice Areas' },
                { href: '/legal-matters', label: 'Legal Matters' },
                { href: '/instructions', label: 'Instructions' },
                { href: '/brief-me', label: 'Brief Me' }
              ].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
                Contact
              </p>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.25)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href="mailto:ingati.aluso@gmail.com"
                style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
              >
                ingati.aluso@gmail.com
              </a>
              <a href="tel:+254721215061"
                style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
              >
                +254 721 215 061
              </a>
              <span style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                Nairobi, Kenya
              </span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 4: Engage */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
                Engage
              </p>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.25)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <Link
                href="/brief-me"
                style={{
                  fontFamily: 'var(--font-inter)',
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 20px',
                  border: '1px solid #A0784A',
                  color: '#A0784A',
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'rgba(160, 120, 74, 0.1)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'transparent';
                }}
              >
                Brief Me
              </Link>
              <a
                href="/documents/aileen-ingati-cv.pdf"
                download
                style={{
                  fontFamily: 'var(--font-inter)',
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 20px',
                  border: '1px solid rgba(255,255,255,0.35)',
                  color: 'rgba(255,255,255,0.75)',
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.6)';
                  el.style.color = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.35)';
                  el.style.color = 'rgba(255,255,255,0.75)';
                }}
              >
                Download CV
              </a>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                Available for senior legal counsel roles, IP advisory mandates and regulatory compliance engagements across East Africa and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-center text-center w-full" style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '3rem',
          paddingTop: '1.5rem',
        }}>
          <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0, textAlign: 'center', width: '100%' }}>
            &copy; {currentYear} All Rights Reserved by Aileen Ingati.
          </p>
        </div>
      </div>
    </footer>
  )
}
