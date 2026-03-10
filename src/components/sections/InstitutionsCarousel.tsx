'use client'

import { Institution } from '@/types'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const C = { warmIvory: '#FAF8F3', warmCharcoal: '#1C1C1A', bronze: '#A0784A', white: '#FFFFFF' }

export default function InstitutionsCarousel({ institutions }: { institutions: Institution[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [failed, setFailed] = useState<Set<string>>(new Set())

  const items = [...institutions, ...institutions]

  const onError = (key: string) => setFailed(p => new Set(p).add(key))

  return (
    <section style={{ backgroundColor: C.warmIvory, padding: 'clamp(2.5rem, 5vw, 4rem) 0', overflow: 'hidden' }}>
      <div ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 mb-8 px-6"
        >
          <div style={{ flex: 1, maxWidth: 80, height: 1, backgroundColor: C.bronze, opacity: 0.25 }} />
          <p className="font-sans uppercase" style={{ color: C.bronze, letterSpacing: '0.22em', fontSize: '0.68rem' }}>
            Institutions and Organisations
          </p>
          <div style={{ flex: 1, maxWidth: 80, height: 1, backgroundColor: C.bronze, opacity: 0.25 }} />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        >
          <div className="carousel-track" style={{ gap: '3rem', paddingLeft: '3rem' }}>
            {items.map((inst, i) => {
              const key = `${inst.id}-${i}`
              const showFallback = failed.has(key) || !inst.logoPath

              // FIX 8: Remove logo white backgrounds with mix-blend-mode: multiply and img tag. Wrapper has background: transparent.
              return (
                <div key={key} className="relative group/logo flex-shrink-0" style={{ backgroundColor: 'transparent' }}>
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 140, height: 64, position: 'relative', backgroundColor: 'transparent' }}
                  >
                    {showFallback ? (
                      <span
                        className="font-sans uppercase text-center leading-snug px-3 py-2"
                        style={{
                          color: C.bronze,
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          border: `1px solid rgba(160,120,74,0.25)`,
                          backgroundColor: 'rgba(160,120,74,0.05)',
                          borderRadius: 2,
                          whiteSpace: 'normal',
                          display: 'block',
                          maxWidth: 130,
                        }}
                      >
                        {inst.name}
                      </span>
                    ) : (
                      // Fallback to img for mixBlendMode support according to prompt requirement
                      <img
                        src={inst.logoPath}
                        alt={inst.name}
                        className="w-full h-full object-contain"
                        style={{ mixBlendMode: 'multiply', objectFit: 'contain', background: 'transparent' }}
                        onError={() => onError(key)}
                      />
                    )}
                  </div>

                  {/* Tooltip */}
                  <div
                    className="absolute pointer-events-none z-20 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200"
                    style={{ bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
                  >
                    <div className="font-sans rounded px-2 py-1 shadow-lg" style={{ backgroundColor: C.warmCharcoal, color: C.white, fontSize: '0.7rem' }}>
                      {inst.name}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
