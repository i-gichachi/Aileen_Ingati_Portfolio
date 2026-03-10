'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedMetric from '@/components/ui/AnimatedMetric'

export default function MatterOutcomes({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#0D2B1F' }}>
            <div className="max-w-7xl mx-auto w-full">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        QUANTIFIABLE OUTCOMES
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className={matter.quantifiableOutcomes.some(o => !o.metric) ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col items-center"}
                >
                    {matter.quantifiableOutcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className={outcome.metric ? "mb-12 text-center w-full" : "bg-[#0A2218] p-8 md:p-10 rounded-sm border border-[rgba(160,120,74,0.1)] hover:border-[rgba(160,120,74,0.25)] transition-colors duration-300 h-full"}
                        >
                            {outcome.metric ? (
                                <div style={{ textAlign: 'center' }}>
                                    <div className="font-playfair md:text-[8rem]" style={{ color: '#A0784A', fontSize: '6rem', fontWeight: 700, lineHeight: 1, marginBottom: '1rem' }}>
                                        <AnimatedMetric value={outcome.metric} />
                                    </div>
                                    <p className="font-inter" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                                        {outcome.text}
                                    </p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                                    <span style={{ color: '#A0784A', fontSize: '0.65rem', marginTop: '10px', flexShrink: 0 }}>■</span>
                                    <span className="font-inter" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                                        {outcome.text}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
