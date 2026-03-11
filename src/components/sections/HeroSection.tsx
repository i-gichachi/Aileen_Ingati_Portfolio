'use client'

import { Profile } from '@/types'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const C = {
  bg: '#0D2B1F',
  bgMid: '#1a4a32',
  bronze: '#A0784A',
  bronzeLight: '#C4976A',
  white: '#FFFFFF',
}

// FIX 4: Full descriptive metric labels
const metrics = [
  { end: 10, suffix: '+', label: 'Years in Legal Practice' },
  { end: 28, suffix: '%', label: 'WIPO Patent Grant Rate' },
  { end: 85, suffix: '%', label: 'Governance Resolution Rate' },
  { end: 30, suffix: '%', label: 'Reduction in Legal Expenditure' },
]

const pills = ['LLB', 'LLM (IP)', 'Patent Agent KIPI', 'IP Agent ARIPO', 'WIPO IAP', 'Courtroom Mail 100 2022']

function useCounter(end: number, active: boolean, suffix: string) {
  const [v, setV] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!active) return
    let cur = 0
    const step = end / 60
    const t = setInterval(() => {
      cur += step
      if (cur >= end) { setV(end); setDone(true); clearInterval(t) }
      else setV(Math.ceil(cur))
    }, 20)
    return () => clearInterval(t)
  }, [end, active])
  return `${v}${done ? suffix : ''}`
}

function Metric({ m, active, delay }: { m: typeof metrics[0]; active: boolean; delay: number }) {
  const display = useCounter(m.end, active, m.suffix)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ textAlign: 'center', minWidth: 0 }}
    >
      <div className="text-[2rem] sm:text-3xl md:text-5xl" style={{ color: C.bronze, fontFamily: 'var(--font-playfair-display)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>
        {display}
      </div>
      <div style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        marginTop: '4px',
        lineHeight: '1.4'
      }}>
        {m.label}
      </div>
    </motion.div>
  )
}

export default function HeroSection({ profile }: { profile: Profile }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })
  const [imgError, setImgError] = useState(false)

  return (
    // FIX 3: min-h-screen with flex items-stretch on the section
    <section
      ref={ref}
      className="min-h-screen"
      style={{ backgroundColor: C.bg, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
    >
      {/* ── MOBILE LAYOUT (flex column) ── */}
      <div className="md:hidden flex flex-col flex-1">

        {/* Photo panel — top, offset below fixed navbar */}
        <div style={{ position: 'relative', width: '100%', height: '32vh', minHeight: 280, maxHeight: 400, flexShrink: 0, paddingTop: '5rem' }}>
          {!imgError ? (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/Hero Image.jpeg"
                alt={profile.name}
                fill
                className="object-cover object-[center_15%]"
                priority
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div style={{ width: '100%', height: '100%', background: `radial-gradient(circle at center, #113828 0%, #0D2B1F 60%, #091f17 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6, overflow: 'hidden', borderBottom: '1px solid rgba(160, 120, 74, 0.15)', boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.1)' }}>
              <span style={{ fontFamily: 'var(--font-playfair-display)', color: C.white, fontSize: '2.5rem', fontWeight: 400, letterSpacing: '0.02em', opacity: 0.9 }}>AAI</span>
              <span style={{ fontFamily: 'var(--font-inter)', color: C.bronze, fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.8 }}>Advocate · Scholar · Leader</span>
            </div>
          )}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: `linear-gradient(to bottom, rgba(13, 43, 31, 0) 0%, ${C.bg} 100%)` }} />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ padding: '0 1.25rem 2rem', display: 'flex', flexDirection: 'column' }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.4)' }} />
            <span style={{
              color: '#A0784A',
              fontSize: '0.58rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600
            }}>
              Senior Legal Counsel &amp; IP Specialist
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.4)' }} />
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: 'var(--font-playfair-display)', color: C.white, fontSize: 'clamp(1.8rem, 8vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 0.75rem 0' }}>
            {profile.name}
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5, margin: '0 0 1.25rem 0', fontStyle: 'italic', fontWeight: 300, maxWidth: '95%' }}>
            {profile.tagline}
          </p>

          {/* Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', margin: '0 0 1.25rem 0' }}>
            {pills.map((p, i) => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.68rem', color: C.bronzeLight, fontWeight: 500, letterSpacing: '0.04em' }}>{p}</span>
                {i < pills.length - 1 && (
                  <span style={{ color: 'rgba(160, 120, 74, 0.4)', fontSize: '0.8rem' }}>·</span>
                )}
              </div>
            ))}
          </div>

          <div style={{ width: '100%', height: 1, backgroundColor: 'rgba(160,120,74,0.15)', margin: '0 0 1.5rem 0' }} />

          {/* Metrics — 4 in one row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem 0.75rem', margin: '0 0 2rem 0' }}>
            {metrics.map((m, i) => <Metric key={m.label} m={m} active={inView} delay={0.3 + i * 0.08} />)}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <Link href="/legal-matters" style={{ flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.bronze, color: C.white, fontFamily: 'var(--font-inter)', fontSize: '0.8rem', letterSpacing: '0.06em', padding: '14px 20px', borderRadius: '4px', minHeight: 46, fontWeight: 500, textAlign: 'center' }}>
              View Legal Matters
            </Link>
            <Link href="/brief-me" style={{ flex: 1, minWidth: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'rgba(255,255,255,0.8)', color: '#FFFFFF', backgroundColor: 'transparent', padding: '14px 20px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.8)', fontWeight: 500, fontFamily: 'var(--font-inter)', fontSize: '0.8rem', letterSpacing: '0.06em', minHeight: 46, textAlign: 'center', transition: 'background-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#FFFFFF' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.8)' }}>
              Brief Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* FIX 3: flex items-stretch so both columns stretch to full height */}
      <div className="hidden md:flex flex-1 items-stretch min-h-screen">

        {/* FIX 2: Left content */}
        <div
          style={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', paddingTop: '100px', paddingBottom: '30px', paddingLeft: 'clamp(2rem, 4vw, 4.5rem)', paddingRight: 'clamp(2rem, 4vw, 4.5rem)', position: 'relative', zIndex: 2 }}
        >
          {/* FIX 10 — Eyebrow: delay 0s */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '0 0 1.5rem 0' }}
          >
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.4)', flexShrink: 0 }} />
            <span style={{
              color: '#A0784A',
              fontSize: '0.72rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600
            }}>Senior Legal Counsel &amp; IP Specialist</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.4)', flexShrink: 0 }} />
          </motion.div>

          {/* FIX 2 + FIX 10 — Name: clamp(2.5rem,5vw,4.5rem), whitespace-nowrap on lg+, delay 0.15s */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            style={{ fontFamily: 'var(--font-playfair-display)', color: C.white, fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 1.5rem 0', whiteSpace: 'nowrap' }}
            className="lg:whitespace-nowrap"
          >
            {profile.name}
          </motion.h1>

          {/* FIX 10 — Tagline: delay 0.3s */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.8, margin: '0 0 2rem 0', fontStyle: 'italic', fontWeight: 300, maxWidth: 520 }}
          >
            {profile.tagline}
          </motion.p>

          {/* FIX 10 — Credential pills: delay 0.45s */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', margin: '0 0 2.5rem 0' }}
          >
            {pills.map((p, i) => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: C.bronzeLight, fontWeight: 500, letterSpacing: '0.04em' }}>{p}</span>
                {i < pills.length - 1 && (
                  <span style={{ color: 'rgba(160, 120, 74, 0.4)', fontSize: '1rem' }}>·</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Bronze divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ width: '100%', height: 1, backgroundColor: 'rgba(160,120,74,0.15)', transformOrigin: 'left', margin: '0 0 2.5rem 0' }}
          />

          {/* FIX 10 — Metrics grid: delay 0.6s */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem', alignItems: 'start', margin: '0 0 3rem 0' }}
          >
            {metrics.map((m, i) => <Metric key={m.label} m={m} active={inView} delay={0.6} />)}
          </motion.div>

          {/* FIX 10 — CTA buttons: delay 0.75s */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/legal-matters"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.bronze, color: C.white, fontFamily: 'var(--font-inter)', fontSize: '0.85rem', letterSpacing: '0.08em', padding: '16px 40px', borderRadius: '4px', minHeight: 52, fontWeight: 500, transition: 'background 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.bronzeLight }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.bronze }}>
              View Legal Matters
            </Link>
            <Link href="/brief-me"
              style={{ borderColor: 'rgba(255,255,255,0.8)', color: '#FFFFFF', backgroundColor: 'transparent', padding: '16px 40px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.8)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', letterSpacing: '0.08em', minHeight: 52, transition: 'all 0.3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(255,255,255,0.1)'; el.style.borderColor = '#FFFFFF' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.borderColor = 'rgba(255,255,255,0.8)' }}>
              Brief Me
            </Link>
          </motion.div>
        </div>

        {/* FIX 1: Right panel — fully filled portrait rectangle panel */}
        <div style={{ width: '45%', padding: 'clamp(6.5rem, 8vw, 8rem) clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)', display: 'flex', alignItems: 'stretch' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '100vh',
              background: 'linear-gradient(160deg, #0f3324 0%, #0D2B1F 60%, #091f17 100%)',
              borderRadius: '8px',
              border: '1px solid rgba(160, 120, 74, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/images/Hero Image.jpeg"
              alt={profile.name}
              fill
              className="object-cover object-[center_20%]"
              priority
            />
            {/* Subtle overlay for depth */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(13, 43, 31, 0.4) 100%)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
