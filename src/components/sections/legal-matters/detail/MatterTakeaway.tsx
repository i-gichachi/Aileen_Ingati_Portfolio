'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterTakeaway({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#1C1C1A' }}>
            <div className="max-w-5xl mx-auto text-center">
                <div className="font-playfair" style={{ color: 'rgba(160,120,74,0.2)', fontSize: '8rem', lineHeight: 0.8, marginBottom: '1rem', textAlign: 'center' }}>
                    &quot;
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        KEY TAKEAWAY
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <p className="font-playfair text-lg md:text-xl" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, textAlign: 'center', margin: 0 }}>
                        {matter.keyTakeaway}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
