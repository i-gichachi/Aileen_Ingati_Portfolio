'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function MattersBottomCTA() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 0' }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', padding: '0 max(2rem, 4vw)' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        NEXT STEP
                    </span>
                    <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <Link
                        href="/brief-me"
                        style={{
                            backgroundColor: '#A0784A',
                            color: '#FFFFFF',
                            padding: '13px 32px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s ease',
                            width: '100%',
                            maxWidth: '300px'
                        }}
                        className="md:w-auto"
                    >
                        Brief Me on a Matter →
                    </Link>
                    <Link
                        href="/practice-areas"
                        style={{
                            border: '1px solid rgba(44,44,42,0.3)',
                            color: '#2C2C2A',
                            backgroundColor: 'transparent',
                            padding: '13px 32px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            width: '100%',
                            maxWidth: '300px'
                        }}
                        className="md:w-auto"
                    >
                        View Practice Areas
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}
