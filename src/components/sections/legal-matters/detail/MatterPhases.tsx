'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterPhases({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#1C1C1A' }}>
            <div className="max-w-7xl mx-auto w-full">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        APPROACH
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                </div>

                <h2 className="font-playfair text-2xl md:text-3xl" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '3rem' }}>
                    The Work
                </h2>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {matter.phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                            className="bg-[#242422] p-8 md:p-10 rounded-sm border border-[rgba(160,120,74,0.08)] hover:border-[rgba(160,120,74,0.25)] transition-colors duration-300"
                        >
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 className="font-inter" style={{ color: '#C4976A', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
                                    {phase.label}
                                </h3>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    {phase.points.map((point, ptIndex) => (
                                        <li key={ptIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                                            <span style={{ color: '#A0784A', fontSize: '0.6rem', marginTop: '6px', flexShrink: 0 }}>■</span>
                                            <span className="font-inter" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
