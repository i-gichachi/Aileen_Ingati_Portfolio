'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function TestimonialsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section style={{ backgroundColor: '#FAF8F3', padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)' }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(1.5rem, 3.5vw, 2.5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Section label row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', gap: '16px', marginBottom: '1rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#A0784A' }} />
            <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
              What Colleagues Say
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#A0784A' }} />
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: 'var(--font-playfair-display)', color: '#2C2C2A', fontSize: '1.5rem', letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', textAlign: 'center' }} className="text-2xl md:text-3xl">
            Testimonials
          </h2>

          {/* Subheading */}
          <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(44,44,42,0.55)', fontSize: '0.85rem', margin: 0, textAlign: 'center', maxWidth: 600 }}>
            Trusted by legal professionals, institutional leaders and innovators across East Africa and beyond.
          </p>
        </motion.div>

        {/* Placeholder cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.15 + (i * 0.15) }}
              style={{
                backgroundColor: '#F0F0EE',
                border: '1.5px dashed rgba(160, 120, 74, 0.2)',
                borderRadius: '6px',
                padding: '1.5rem',
                minHeight: '140px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Decorative quotation mark */}
              <div style={{
                position: 'absolute',
                top: '0.5rem',
                left: '1.5rem',
                color: '#A0784A',
                opacity: 0.2,
                fontFamily: 'var(--font-playfair-display)',
                fontSize: '4.5rem',
                lineHeight: 1
              }}>
                &ldquo;
              </div>

              {/* Centred placeholder text */}
              <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(44,44,42,0.35)', fontSize: '0.875rem', margin: 0, textAlign: 'center' }}>
                Testimonials coming soon
              </p>
            </motion.div>
          ))}
        </div>

        {/* View More Testimonials button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '1.5rem' }}
        >
          <Link
            href="/counsel#testimonials"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#A0784A',
              padding: '13px 32px',
              borderRadius: '4px',
              fontWeight: 600,
              border: '1px solid #A0784A',
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#A0784A';
              el.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'transparent';
              el.style.color = '#A0784A';
            }}
          >
            View More Testimonials
            <span style={{ fontSize: '1rem' }}>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
