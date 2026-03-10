'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterCompetencies({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-12 md:py-16 px-6 lg:px-12" style={{ backgroundColor: '#FAF8F3' }}>
            <div className="max-w-4xl mx-auto lg:mx-0">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        COMPETENCIES APPLIED
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', flex: 1, maxWidth: '60px' }} />
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
                >
                    {matter.coreCompetencies.map((competency, i) => (
                        <span key={i} className="font-inter" style={{
                            border: '1px solid rgba(160,120,74,0.4)',
                            color: '#A0784A',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '0.8rem',
                            letterSpacing: '0.04em',
                            fontWeight: 500
                        }}>
                            {competency}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
