'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MatterAchievements({ matter }: { matter: typeof caseStudies[0] }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#FAF8F3' }}>
            <div className="max-w-7xl mx-auto w-full text-center lg:text-left">
                <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        QUALITATIVE ACHIEVEMENTS
                    </span>
                </div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left"
                >
                    {matter.qualitativeAchievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                            className="bg-[#FFFFFF] p-8 rounded-sm border border-[rgba(160,120,74,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
                        >
                            <div className="flex items-start gap-4">
                                <span style={{ color: '#A0784A', fontSize: '0.6rem', marginTop: '6px', flexShrink: 0 }}>■</span>
                                <p className="font-inter" style={{ color: 'rgba(44,44,42,0.85)', fontSize: '0.95rem', lineHeight: 1.8, margin: 0 }}>
                                    {achievement}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
