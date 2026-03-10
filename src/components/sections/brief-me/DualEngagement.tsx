'use client'

/**
 * DualEngagement Section: Handles Brief submission and Calendly booking.
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile } from '@/data/profile'
import BriefForm from './BriefForm'
import CalendlyBlock from './CalendlyBlock'

export default function DualEngagement() {
    const [isMobile, setIsMobile] = useState(false)
    const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.1 })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className="bg-white" style={{ backgroundColor: '#FFFFFF', paddingTop: 'clamp(2.5rem, 8vh, 5rem)', paddingBottom: 'clamp(2.5rem, 8vh, 5rem)' }}>
            <div style={{ maxWidth: '1100px', margin: 'auto', paddingInline: 'max(2rem, 4vw)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    style={{ textAlign: 'center', marginBottom: '2.5rem' }}
                >
                    <p style={{
                        color: 'rgba(44,44,42,0.4)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>
                        Preferred Engagement
                    </p>
                    <h2 style={{
                        fontFamily: 'var(--font-playfair)',
                        color: '#2C2C2A',
                        fontSize: '2rem',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2
                    }}>
                        Two ways to begin. One destination.
                    </h2>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'flex-start',
                    gap: '0',
                }}>
                    {/* Left column */}
                    <motion.div
                        ref={refLeft}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inViewLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.7 }}
                        style={{ flex: '1 1 0', minWidth: 0 }}
                    >
                        <BriefForm contactEmail={profile.email} />
                    </motion.div>

                    {/* OR divider */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        width: isMobile ? '100%' : '80px',
                        height: isMobile ? '60px' : 'auto',
                        alignSelf: 'stretch',
                        paddingTop: isMobile ? '0' : '4rem'
                    }}>
                        <div style={{ flex: 1, [isMobile ? 'height' : 'width']: '1px', backgroundColor: 'rgba(160,120,74,0.2)' }} />
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            border: '1px solid rgba(160,120,74,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            margin: isMobile ? '0 1rem' : '1rem 0',
                            color: 'rgba(44,44,42,0.6)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-inter)'
                        }}>
                            OR
                        </div>
                        <div style={{ flex: 1, [isMobile ? 'height' : 'width']: '1px', backgroundColor: 'rgba(160,120,74,0.2)' }} />
                    </div>

                    {/* Right column */}
                    <motion.div
                        ref={refRight}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inViewRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.7 }}
                        style={{ flex: '1 1 0', minWidth: 0 }}
                    >
                        <CalendlyBlock calendlyUrl={profile.calendlyUrl} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
