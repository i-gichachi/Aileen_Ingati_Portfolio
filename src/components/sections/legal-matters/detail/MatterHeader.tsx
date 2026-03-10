'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import AnimatedMetric from '@/components/ui/AnimatedMetric'

export default function MatterHeader({ matter }: { matter: typeof caseStudies[0] }) {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 lg:px-12" style={{ backgroundColor: '#FFFFFF' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto w-full"
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        {matter.matterNumber}
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-24 items-start">
                    <div>
                        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl" style={{ color: '#2C2C2A', fontWeight: 600, lineHeight: 1.25, marginBottom: '2rem' }}>
                            {matter.title}
                        </h1>

                        <div className="font-inter" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                                {matter.organisation}
                            </span>
                            {matter.logoPath && (
                                <div className="flex items-center justify-center py-1 px-3 rounded-md border border-solid border-[rgba(160,120,74,0.15)] bg-[#FAF8F3]">
                                    <img
                                        src={matter.logoPath}
                                        alt={matter.organisation}
                                        style={{ height: '24px', width: 'auto', objectFit: 'contain', opacity: 0.9, mixBlendMode: 'multiply' }}
                                    />
                                </div>
                            )}
                            <span style={{ color: 'rgba(44,44,42,0.3)', fontSize: '0.75rem' }}>·</span>
                            <span style={{ color: 'rgba(44,44,42,0.55)', fontSize: '0.8rem' }}>
                                {matter.dateRange}
                            </span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:border-l lg:border-[rgba(160,120,74,0.2)] lg:pl-12 flex flex-col justify-center h-full pt-8 lg:pt-0 border-t border-[rgba(160,120,74,0.2)] lg:border-t-0"
                    >
                        <span className="font-playfair text-6xl md:text-[5.5rem] lg:text-[6.5rem]" style={{ color: '#A0784A', fontWeight: 700, lineHeight: 0.9, marginBottom: '0.5rem' }}>
                            <AnimatedMetric value={matter.keyMetric} />
                        </span>
                        <span className="font-inter" style={{ color: 'rgba(44,44,42,0.55)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {matter.keyMetricLabel}
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
