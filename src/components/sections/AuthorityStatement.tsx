'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const C = { bg: '#1C1C1A', white: '#FFFFFF', bronze: '#A0784A' }

export default function AuthorityStatement() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [hover, setHover] = useState(false)

  return (
    <section style={{ backgroundColor: C.bg, padding: 'clamp(2.5rem, 5vw, 4.5rem) 1.25rem' }}>
      <div ref={ref} style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 0.25, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-serif"
          style={{ color: C.bronze, fontSize: '4.5rem', lineHeight: 1, marginBottom: '-0.25rem' }}
        >
          &ldquo;
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="font-serif"
          style={{
            color: C.white,
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            lineHeight: 1.85,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
          }}
        >
          Across a decade of practice spanning the Judiciary of Kenya, WIPO&apos;s global IP programme
          and the boardrooms of East Africa&apos;s leading institutions, I have built a legal practice
          defined not by the cases I have taken on but by the outcomes I have delivered. From securing
          a 28% patent grant rate for underserved innovators to driving an 85% governance resolution
          rate at Kenya&apos;s apex judicial institution, my work sits at the intersection of legal
          scholarship, commercial strategy and institutional leadership.
        </motion.p>

        {/* Closing bronze rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ width: 48, height: 1, backgroundColor: C.bronze, opacity: 0.2, margin: '2rem auto' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <Link
            href="/counsel"
            className="font-sans"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: hover ? '#C4976A' : '#A0784A',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 36px',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Read Full Profile
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
