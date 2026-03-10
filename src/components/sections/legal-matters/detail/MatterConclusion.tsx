'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterConclusion({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    if (!matter.conclusion) return null

    return (
        <section className="py-12 md:py-16 px-6 lg:px-12" style={{ backgroundColor: '#FFFFFF' }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto lg:mx-0 text-left"
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        CONCLUSION
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', flex: 1, maxWidth: '60px' }} />
                </div>

                <p className="font-inter" style={{ color: 'rgba(44,44,42,0.8)', fontSize: '1rem', lineHeight: 1.85, whiteSpace: 'pre-wrap', margin: 0 }}>
                    {matter.conclusion}
                </p>
            </motion.div>
        </section>
    )
}
