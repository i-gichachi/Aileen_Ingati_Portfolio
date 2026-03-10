'use client'

import { Competency } from '@/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const C = { bronze: '#A0784A', charcoal: '#2C2C2A' }

const pillarDesc: Record<string, string> = {
  'intellectual-property': 'Protecting and commercialising innovation across local and international jurisdictions.',
  'litigation': 'Strategic management of disputes from early risk identification through to resolution.',
  'governance': 'Building compliance frameworks and governance structures that deliver institutional accountability.',
}

export default function PracticeAreasPreview({ competencies }: { competencies: Competency[] }) {
  // FIX 9: react-intersection-observer
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const pillars = ['intellectual-property', 'litigation', 'governance']
  const cards = pillars.map(p => {
    const comps = competencies.filter(c => c.pillar === p)
    return {
      id: p,
      pillarLabel: comps[0]?.pillarLabel,
      description: pillarDesc[p],
      competencies: comps
    }
  }).filter(c => c.competencies.length > 0)

  return (
    // FIX 5: pure-white background
    <section
      className="bg-pure-white"
      style={{ backgroundColor: '#FFFFFF', padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)' }}
    >
      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
            <div style={{ width: 20, height: 1, backgroundColor: C.bronze }} />
            <p className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.22em', fontSize: '0.68rem' }}>Practice Areas</p>
          </div>
          <h2 className="font-serif" style={{ color: C.charcoal, fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.2, letterSpacing: '-0.01em', maxWidth: 620 }}>
            Where Legal Authority Meets Strategic Execution
          </h2>
        </motion.div>

        {/* FIX 9: Staggered card animations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }}
              style={{
                backgroundColor: '#FAF8F3',
                borderTop: `3px solid ${C.bronze}`,
                padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Fixed height wrapper for the title area so the bronze line is always horizontal across all cards */}
              <div style={{ flexShrink: 0 }}>
                <span className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.18em', fontSize: '0.65rem', marginBottom: '1rem', display: 'block' }}>
                  Practice Area
                </span>

                <h3 className="font-serif md:min-h-[3.6rem]" style={{ color: C.charcoal, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  {card.pillarLabel}
                </h3>

                <div style={{ width: '100%', height: 1, backgroundColor: C.bronze, opacity: 0.12, marginBottom: '1rem' }} />
              </div>

              {/* Fixed height wrapper for the description so the bullet lists start at the exact same Y pixel */}
              <div style={{ flexShrink: 0 }}>
                <p className="font-sans md:min-h-[6rem]" style={{ color: `rgba(44,44,42,0.72)`, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {card.description}
                </p>
              </div>

              {/* Flex grow container for bullets to push the bottom link down equally */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem', flexGrow: 1 }}>
                {card.competencies.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 font-sans" style={{ color: `rgba(44,44,42,0.85)`, fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <span style={{ color: C.bronze, fontSize: '7px', marginTop: 6, flexShrink: 0 }}>&#9632;</span>
                    {c.title}
                  </li>
                ))}
              </ul>

              <Link href={`/practice-areas#${card.id}`} className="inline-flex items-center group font-sans transition-all mt-auto"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#A0784A', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid transparent', paddingBottom: '2px', width: 'fit-content' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottom = '1px solid #A0784A' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottom = '1px solid transparent' }}>
                View Practice Areas
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
