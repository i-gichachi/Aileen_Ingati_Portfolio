'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { memberships } from '@/data/memberships'

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay: i * 0.10, ease: 'easeOut' as const },
    }),
}

const langVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 + i * 0.12 },
    }),
}

export default function ProfessionalMemberships() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
    const [langRef, langInView] = useInView({ triggerOnce: true, threshold: 0.2 })
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })

    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Swahili', level: 'Native' },
        { name: 'French', level: 'Intermediate' },
    ]

    return (
        <section className="py-16 md:py-24 w-full" style={{ backgroundColor: '#F0F0EE' }}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 16 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ width: '30px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                        <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                            Professional Standing
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            style={{ width: '30px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                    </div>

                    <h2 className="font-playfair text-[#2C2C2A] text-3xl md:text-4xl" style={{ marginBottom: '2.5rem' }}>
                        Memberships and Affiliations
                    </h2>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {memberships.map((membership, i) => (
                        <motion.div
                            key={membership.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{
                                y: -4,
                                borderColor: 'rgba(160, 120, 74, 0.5)',
                                boxShadow: '0 8px 24px rgba(160, 120, 74, 0.1)',
                            }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid rgba(160, 120, 74, 0.2)',
                                borderRadius: '6px',
                                padding: '1.25rem 1.5rem',
                                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-start gap-3 mt-1">
                                        <span style={{ color: '#A0784A', fontSize: '0.75rem', marginTop: '2px' }}>■</span>
                                        <h3 className="font-inter text-[#2C2C2A] text-sm font-semibold leading-snug pr-2">
                                            {membership.organisation}
                                        </h3>
                                    </div>
                                    {membership.logoPath && (
                                        <motion.div
                                            whileHover={{ scale: 1.12 }}
                                            className="shrink-0 flex items-center justify-center bg-gray-50 rounded border border-gray-50 p-1"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <img src={membership.logoPath} alt={`${membership.organisation} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </motion.div>
                                    )}
                                </div>
                                <div style={{ paddingLeft: '24px' }} className="flex flex-col flex-grow justify-end">
                                    <p className="font-inter" style={{ color: '#C4976A', fontSize: '0.75rem', fontVariant: 'small-caps', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                        {membership.role}
                                    </p>
                                    {membership.period && (
                                        <p className="font-inter" style={{ color: 'rgba(44,44,42,0.4)', fontSize: '0.75rem' }}>
                                            {membership.period}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Languages – sophisticated redesign */}
                <div
                    ref={langRef}
                    style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(160, 120, 74, 0.15)' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={langInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}
                    >
                        <div style={{ width: '20px', height: '1px', backgroundColor: '#A0784A' }} />
                        <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                            Languages
                        </span>
                    </motion.div>

                    <div className="flex flex-wrap gap-6 md:gap-12">
                        {languages.map((lang, idx) => (
                            <motion.div
                                key={idx}
                                custom={idx}
                                variants={langVariants}
                                initial="hidden"
                                animate={langInView ? 'visible' : 'hidden'}
                                whileHover={{ y: -3 }}
                                className="flex flex-col gap-1 cursor-default"
                            >
                                <span className="font-playfair text-[#2C2C2A] text-xl font-semibold">{lang.name}</span>
                                <span className="font-inter" style={{ color: '#C4976A', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                                    {lang.level}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
