'use client'

import { motion } from 'framer-motion'

export default function PageIntro() {
    return (
        <section
            className="bg-[#0D2B1F]"
            style={{
                backgroundColor: '#0D2B1F',
                backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(26, 74, 50, 0.4) 0%, transparent 70%)',
                paddingTop: 'clamp(4rem, 10vh, 6.5rem)',
                paddingBottom: 'clamp(3rem, 8vh, 5rem)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '1100px', margin: 'auto', paddingInline: 'max(2rem, 4vw)', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '700px', textAlign: 'left' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.4)' }} />
                        <span style={{
                            color: '#A0784A',
                            fontSize: '0.65rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            fontFamily: 'var(--font-inter)'
                        }}>
                            BRIEF ME
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
                        style={{
                            fontFamily: 'var(--font-playfair)',
                            color: '#FFFFFF',
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Begin Your Engagement.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
                        style={{
                            fontFamily: 'var(--font-inter)',
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                            lineHeight: 1.7,
                            maxWidth: '540px',
                            marginBottom: '2.5rem',
                            fontWeight: 300
                        }}
                    >
                        Submit a brief or book a consultation directly. Aileen reviews every matter personally and responds within two working days.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.45 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '2rem'
                        }}
                    >
                        {[
                            'Advocating for Excellence',
                            'Patent Agent, KIPI',
                            'WIPO IP Specialist'
                        ].map((signal, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {i > 0 && (
                                    <span style={{ color: 'rgba(160,120,74,0.4)', fontSize: '0.4rem' }}>●</span>
                                )}
                                <span style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.08em',
                                    fontFamily: 'var(--font-inter)',
                                    textTransform: 'uppercase',
                                    fontWeight: 500
                                }}>
                                    {signal}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
