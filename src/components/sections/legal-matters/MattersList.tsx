'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

function derivePracticeArea(id: string) {
    switch (id) {
        case 'wipo-patent-grant': return 'Intellectual Property'
        case 'judiciary-resolution-rate': return 'Governance'
        case 'apsea-governance': return 'Policy Reform'
        case 'kazi-advocates-cost-reduction': return 'Litigation'
        case 'aluso-ingati-associates': return 'Litigation & Commercial'
        default: return 'Practice Area'
    }
}

function MatterCard({ matter, index }: { matter: typeof caseStudies[0], index: number }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
    const isEven = index % 2 === 0
    const backgroundColor = isEven ? '#FFFFFF' : '#F0F0EE'

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ backgroundColor }}
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start gap-12 border-b border-[rgba(160,120,74,0.1)] py-16 md:py-24 px-6 lg:px-12">
                <div style={{ flex: 1, minWidth: 0, order: 2 }} className="md:order-1">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                            {matter.matterNumber}
                        </span>
                        <span style={{
                            border: '1px solid rgba(160, 120, 74, 0.4)',
                            color: '#A0784A',
                            padding: '3px 10px',
                            borderRadius: '100px',
                            fontSize: '0.65rem',
                            letterSpacing: '0.1em',
                            fontWeight: 600,
                            textTransform: 'uppercase'
                        }}>
                            {derivePracticeArea(matter.id)}
                        </span>
                    </div>

                    <h2 className="font-playfair text-2xl md:text-3xl" style={{ color: '#2C2C2A', fontWeight: 600, lineHeight: 1.3, marginBottom: '1.25rem' }}>
                        {matter.title}
                    </h2>

                    <p className="font-inter" style={{ color: 'rgba(44,44,42,0.72)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                        {matter.executiveSummary}
                    </p>

                    <Link
                        href={`/legal-matters/${matter.id}`}
                        className="group inline-flex items-center gap-2 font-inter font-semibold transition-all"
                        style={{
                            color: '#A0784A',
                            fontSize: '0.9rem',
                            textDecoration: 'none'
                        }}
                    >
                        Read the Full Matter
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '1.1rem' }}>→</span>
                    </Link>
                </div>

                <div
                    className="w-full md:w-[220px] shrink-0 order-1 md:order-2 md:border-l md:border-solid md:border-l-[rgba(160,120,74,0.2)] md:pl-8 flex flex-col items-start gap-4 mb-6 md:mb-0 border-b border-solid border-b-[rgba(160,120,74,0.2)] pb-6 md:border-b-0 md:pb-0"
                >
                    <div className="font-playfair" style={{ color: '#A0784A', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>
                        {matter.keyMetric}
                    </div>
                    <div className="font-inter" style={{ color: 'rgba(44,44,42,0.55)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        {matter.keyMetricLabel}
                    </div>
                    <div className="font-inter" style={{ color: 'rgba(44,44,42,0.6)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        {matter.organisation}
                    </div>
                    {matter.logoPath && (
                        <img
                            src={matter.logoPath}
                            alt={matter.organisation}
                            style={{
                                height: '36px',
                                width: 'auto',
                                objectFit: 'contain',
                                opacity: 0.8,
                                mixBlendMode: 'multiply'
                            }}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default function MattersList() {
    return (
        <section>
            {caseStudies.map((matter, index) => (
                <MatterCard key={matter.id} matter={matter} index={index} />
            ))}
        </section>
    )
}
