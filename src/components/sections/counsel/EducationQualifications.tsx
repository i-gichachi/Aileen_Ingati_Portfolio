'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education, certifications } from '@/data/education'

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' as const },
    }),
}

const certVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, delay: i * 0.09, ease: 'easeOut' as const },
    }),
}

export default function EducationQualifications() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.08 })
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.08 })
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section className="py-16 md:py-24 w-full" style={{ backgroundColor: '#FAF8F3' }}>
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
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
                            Education and Qualifications
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            style={{ flex: 1, maxWidth: '50px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                    </div>

                    <h2 className="font-playfair text-3xl md:text-4xl" style={{ color: '#2C2C2A', marginBottom: '2.5rem' }}>
                        Academic Foundation
                    </h2>
                </motion.div>

                <div ref={ref1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {education.map((deg, i) => (
                        <motion.div
                            key={deg.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView1 ? 'visible' : 'hidden'}
                            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(160, 120, 74, 0.15)' }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderTop: '3px solid #A0784A',
                                borderRadius: '0 0 6px 6px',
                                padding: '1.5rem',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'box-shadow 0.3s ease',
                            }}
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="font-playfair text-lg md:text-xl font-semibold leading-tight pr-2" style={{ color: '#2C2C2A' }}>{deg.institution}</h3>
                                {deg.logoPath && (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="shrink-0 relative flex items-center justify-center p-2 bg-gray-50 rounded border border-gray-100"
                                        style={{ width: '64px', height: '64px' }}
                                    >
                                        <img src={deg.logoPath} alt={`${deg.institution} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    </motion.div>
                                )}
                            </div>
                            <p className="font-inter text-sm" style={{ color: '#A0784A', fontVariant: 'small-caps', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{deg.degree}</p>
                            <p className="font-inter text-xs mt-auto" style={{ color: 'rgba(44,44,42,0.45)' }}>{deg.year}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView1 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '2.5rem 0 2rem' }}
                >
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.2)' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                        Certifications and Training
                    </span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.2)' }} />
                </motion.div>

                <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            custom={i}
                            variants={certVariants}
                            initial="hidden"
                            animate={inView2 ? 'visible' : 'hidden'}
                            whileHover={{ x: 4 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(160, 120, 74, 0.1)', cursor: 'default' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <span style={{ color: '#A0784A', fontSize: '0.6rem', marginTop: '4px', flexShrink: 0 }}>■</span>
                                    <span style={{ color: '#2C2C2A', fontSize: '0.9rem', fontWeight: 600, paddingRight: '8px', lineHeight: '1.3' }}>{cert.name}</span>
                                </div>
                                {cert.logoPath && (
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        className="shrink-0 flex items-center justify-center p-1.5 bg-gray-50 rounded border border-gray-100"
                                        style={{ width: '46px', height: '46px', marginTop: '2px' }}
                                    >
                                        <img src={cert.logoPath} alt={`${cert.issuingBody} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    </motion.div>
                                )}
                            </div>
                            <div style={{ paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
                                <span style={{ color: '#A0784A', fontSize: '0.75rem' }}>{cert.issuingBody}</span>
                                <span style={{ color: 'rgba(44,44,42,0.4)', fontSize: '0.75rem' }}>{cert.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
