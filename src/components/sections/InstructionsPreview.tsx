'use client'

import { Service } from '@/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const C = { bg: '#F0F0EE', cardBg: '#FFFFFF', bronze: '#A0784A', charcoal: '#2C2C2A' }

export default function InstructionsPreview({ services }: { services: Service[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const instructions = services.slice(0, 2)

  return (
    // FIX 6: Instructions section background
    <section className="bg-soft-grey" style={{ backgroundColor: '#F0F0EE', padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)' }}>
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
            <p className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.22em', fontSize: '0.68rem' }}>Instructions</p>
          </div>
          <h2 className="font-serif" style={{ color: C.charcoal, fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Legal Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {instructions.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }}
              style={{
                // FIX 6: service card styling
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                borderTop: `3px solid ${C.bronze}`,
                padding: 'clamp(1.25rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Fixed Wrapper for Title and Rule */}
              <div style={{ flexShrink: 0 }}>
                <h3 className="font-serif md:min-h-[4.8rem]" style={{ color: C.charcoal, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  {svc.title}
                </h3>

                {/* Thin rule */}
                <div style={{ width: '100%', height: 1, backgroundColor: C.bronze, opacity: 0.12, marginBottom: '1rem' }} />
              </div>

              {/* Fixed Wrapper for Description */}
              <div style={{ flexShrink: 0 }}>
                <p className="font-sans md:min-h-[7rem]" style={{ color: `rgba(44,44,42,0.72)`, fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {svc.description}
                </p>
              </div>

              {/* Flex Grow for Ideal For lists */}
              <div style={{ marginBottom: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.18em', fontSize: '0.62rem', display: 'block', marginBottom: '0.75rem', flexShrink: 0 }}>
                  Ideal For
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flexGrow: 1 }}>
                  {svc.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans" style={{ color: `rgba(44,44,42,0.78)`, fontSize: '0.85rem', lineHeight: 1.5 }}>
                      <span style={{ color: C.bronze, fontSize: '7px', marginTop: 7, flexShrink: 0 }}>&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing locked to bottom */}
              <div style={{ flexShrink: 0 }}>
                <p className="font-sans" style={{ color: `rgba(44,44,42,0.5)`, fontSize: '0.75rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {svc.pricing}
                </p>
                <Link href={`/instructions#${svc.id}`} className="inline-flex items-center group font-sans transition-all mt-auto"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#A0784A', fontWeight: 600, fontSize: '0.85rem' }}>
                  Read More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex justify-center"
        >
          <Link href="/instructions"
            style={{ backgroundColor: '#A0784A', color: '#FFFFFF', padding: '14px 36px', borderRadius: '4px', fontWeight: 600, display: 'inline-flex', marginTop: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'background-color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C4976A' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#A0784A' }}
          >
            View All Instructions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
