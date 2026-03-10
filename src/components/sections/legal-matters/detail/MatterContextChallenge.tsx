'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterContextChallenge({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-12 md:py-20 px-6 lg:px-12" style={{ backgroundColor: '#FAF8F3' }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto w-full"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Context Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                                CONTEXT
                            </span>
                            <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', flex: 1, maxWidth: '60px' }} />
                        </div>
                        <p className="font-inter" style={{ color: 'rgba(44,44,42,0.8)', fontSize: '1rem', lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
                            {matter.context}
                        </p>
                    </div>

                    {/* Challenge Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                                THE CHALLENGE
                            </span>
                            <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', flex: 1, maxWidth: '60px' }} />
                        </div>
                        <p className="font-inter" style={{ color: 'rgba(44,44,42,0.8)', fontSize: '1rem', lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
                            {matter.challenge}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
