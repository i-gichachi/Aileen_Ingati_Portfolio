'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterProficiencies({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-12 md:py-16 px-6 lg:px-12" style={{ backgroundColor: '#F0F0EE' }}>
            <div className="max-w-4xl mx-auto lg:mx-0">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        TOOLS APPLIED
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', flex: 1, maxWidth: '60px' }} />
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matter.technicalProficiencies.map((proficiency, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid rgba(160,120,74,0.15)',
                                borderRadius: '6px',
                                padding: '1.25rem 1.5rem'
                            }}
                        >
                            <div className="font-inter" style={{ color: '#2C2C2A', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                                {proficiency.tool}
                            </div>
                            <div className="font-inter" style={{ color: 'rgba(44,44,42,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                {proficiency.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
