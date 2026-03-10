'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { competencies } from '@/data/competencies'

const PILLAR_META: Record<string, { metric?: string; metricLabel?: string; credential?: string }> = {
    'litigation-management': { metric: '30%', metricLabel: 'Reduction in Legal Expenditure' },
    'policy-reform': { credential: 'APSEA Policy Lead' },
    'contract-drafting': { credential: '10+ Years Practice' },
}

const ORDER = ['litigation-management', 'policy-reform', 'contract-drafting']

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.05 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: 'easeOut' as const },
    },
}

export default function PillarTwo() {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.08 })

    const pillarData = ORDER.map((id) => ({
        competency: competencies.find((c) => c.id === id),
        ...PILLAR_META[id],
    })).filter((d) => d.competency)

    return (
        <section
            id="litigation"
            className="bg-soft-grey w-full relative overflow-hidden"
            style={{ backgroundColor: '#F0F0EE', paddingTop: '5rem', paddingBottom: '6rem' }}
        >
            {/* Subtle ambient orb */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '45%',
                    height: '100%',
                    background: 'radial-gradient(circle at 10% 40%, rgba(160,120,74,0.06) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Pillar Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ maxWidth: '760px', marginBottom: '3rem' }}
                >
                    <p
                        className="font-inter"
                        style={{
                            color: '#A0784A',
                            fontSize: '0.7rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            marginBottom: '0.75rem',
                        }}
                    >
                        02
                    </p>
                    <h2
                        className="font-playfair"
                        style={{
                            color: '#2C2C2A',
                            fontWeight: 600,
                            fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                            lineHeight: 1.2,
                            marginBottom: '0.85rem',
                        }}
                    >
                        Litigation and Dispute Resolution
                    </h2>
                    <p
                        className="font-inter"
                        style={{
                            color: 'rgba(44,44,42,0.65)',
                            fontSize: '0.9rem',
                            lineHeight: 1.75,
                            maxWidth: '560px',
                        }}
                    >
                        Managing disputes from risk identification through to resolution, with expertise spanning
                        courtroom advocacy, mediation, arbitration and legislative reform across East African
                        jurisdictions.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={headerInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{
                            marginTop: '2rem',
                            height: '1px',
                            backgroundColor: 'rgba(160, 120, 74, 0.2)',
                            transformOrigin: 'left',
                        }}
                    />
                </motion.div>

                {/* Competency Cards */}
                <motion.div
                    ref={cardsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={cardsInView ? 'visible' : 'hidden'}
                    style={{ width: '100%' }}
                >
                    {pillarData.map(({ competency, metric, metricLabel, credential }) => (
                        <motion.div
                            key={competency!.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 10px 32px rgba(160,120,74,0.1)',
                                borderColor: 'rgba(160,120,74,0.45)',
                            }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid rgba(160, 120, 74, 0.18)',
                                borderLeft: '3px solid #A0784A',
                                borderRadius: '0 6px 6px 0',
                                padding: '1.75rem 2rem',
                                marginBottom: '1.25rem',
                                transition: 'box-shadow 0.3s ease, border-color 0.25s ease',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Subtle shimmer line */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '30%',
                                    height: '100%',
                                    background:
                                        'linear-gradient(to left, rgba(160,120,74,0.03) 0%, transparent 100%)',
                                    pointerEvents: 'none',
                                }}
                            />

                            {/* Metric or credential badge */}
                            {(metric || credential) && (
                                <div style={{ marginBottom: '0.85rem' }}>
                                    {metric ? (
                                        <span
                                            className="font-playfair"
                                            style={{
                                                color: '#A0784A',
                                                fontSize: '1.6rem',
                                                fontWeight: 700,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {metric}{' '}
                                            <span
                                                className="font-inter"
                                                style={{
                                                    color: 'rgba(44,44,42,0.45)',
                                                    fontSize: '0.65rem',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    verticalAlign: 'middle',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {metricLabel}
                                            </span>
                                        </span>
                                    ) : (
                                        <span
                                            className="font-inter"
                                            style={{
                                                display: 'inline-block',
                                                border: '1px solid rgba(160, 120, 74, 0.4)',
                                                color: '#A0784A',
                                                padding: '3px 11px',
                                                borderRadius: '100px',
                                                fontSize: '0.68rem',
                                                letterSpacing: '0.09em',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {credential}
                                        </span>
                                    )}
                                </div>
                            )}

                            <h3
                                className="font-playfair"
                                style={{
                                    color: '#2C2C2A',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '0.6rem',
                                    lineHeight: 1.3,
                                }}
                            >
                                {competency!.title}
                            </h3>
                            <p
                                className="font-inter"
                                style={{
                                    color: 'rgba(44,44,42,0.7)',
                                    fontSize: '0.875rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                {competency!.paragraph}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
