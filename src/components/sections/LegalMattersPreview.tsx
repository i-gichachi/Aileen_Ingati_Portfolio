'use client'

import { CaseStudy } from '@/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const C = { bg: '#1C1C1A', cardBg: '#0D2B1F', bronze: '#A0784A', white: '#FFFFFF' }

export default function LegalMattersPreview({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const matters = caseStudies.slice(0, 2)

  return (
    <section style={{ backgroundColor: C.bg, padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)' }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
            <div style={{ width: 20, height: 1, backgroundColor: C.bronze }} />
            <p className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.22em', fontSize: '0.68rem' }}>Legal Matters</p>
          </div>
          <h2 className="font-serif" style={{ color: C.white, fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Selected Engagements
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {matters.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              whileHover={{ boxShadow: '0 0 32px rgba(160,120,74,0.12)' }}
              style={{
                backgroundColor: '#113527', // Slightly lighter than #0D2B1F to pop off background better
                borderLeft: `3px solid ${C.bronze}`,
                padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'box-shadow 0.4s ease'
              }}
            >
              {/* Header: Matter number + org + logo */}
              <div className="flex items-start justify-between gap-4" style={{ marginBottom: '1.25rem', height: '48px', flexShrink: 0 }}>
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.2em', fontSize: '0.65rem' }}>{m.matterNumber}</span>
                  <span className="font-sans" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: 1.4 }}>{m.organisation}</span>
                </div>
                {m.logoPath && (
                  <div className="flex-shrink-0 relative overflow-hidden" style={{ backgroundColor: 'transparent' }}>
                    <img
                      src={m.logoPath}
                      alt={`${m.organisation} logo`}
                      style={{
                        height: '32px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.75,
                        mixBlendMode: 'luminosity',
                        filter: 'brightness(1.2)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif md:min-h-[4.8rem]" style={{ color: C.white, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '1.25rem', display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}>
                {m.title}
              </h3>

              {/* Metric highlight */}
              <div style={{
                borderTop: '1px solid rgba(160,120,74,0.15)',
                borderBottom: '1px solid rgba(160,120,74,0.15)',
                padding: '1rem 0',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                flexShrink: 0
              }}>
                <span className="font-serif font-bold" style={{ color: C.bronze, fontSize: 'clamp(2.2rem, 5vw, 3rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {m.keyMetric}
                </span>
                <span className="font-sans" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>
                  {m.keyMetricLabel}
                </span>
              </div>

              {/* Summary */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <p className="font-sans md:min-h-[6rem]" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {m.executiveSummary}
                </p>
              </div>

              <Link href={`/legal-matters/${m.id}`} className="inline-flex items-center group font-sans hover:underline mt-auto pt-4" style={{ color: '#A0784A', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read the Full Matter
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/legal-matters" className="inline-flex items-center group font-sans hover:underline" style={{ color: '#A0784A', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            View All Legal Matters
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
