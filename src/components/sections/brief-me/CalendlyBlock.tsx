'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CalendlyBlock({ calendlyUrl }: { calendlyUrl: string }) {
    const isCalendlyAvailable = calendlyUrl && calendlyUrl !== '#'
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div style={{ maxWidth: '480px' }}>
            <h2 style={{
                fontFamily: 'var(--font-playfair)',
                color: '#2C2C2A',
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
            }}>
                Book a Consultation
            </h2>
            <p style={{
                color: 'rgba(44,44,42,0.6)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 400
            }}>
                Prefer to talk through your matter directly? Book a consultation call at a time that suits you.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                style={{
                    border: '1px solid rgba(160,120,74,0.15)',
                    borderRadius: '8px',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '420px',
                    backgroundColor: '#FAF8F3',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {isCalendlyAvailable ? (
                    <>
                        <div style={{
                            marginBottom: '2rem',
                            width: '64px',
                            height: '64px',
                            borderRadius: '12px',
                            backgroundColor: 'rgba(160,120,74,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A0784A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#A0784A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontFamily: 'var(--font-playfair)',
                            color: '#2C2C2A',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>
                            Schedule a Call
                        </h3>
                        <p style={{
                            fontFamily: 'var(--font-inter)',
                            color: 'rgba(44,44,42,0.65)',
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            marginBottom: '2.5rem',
                            maxWidth: '300px'
                        }}>
                            Select a date and time that works for you. Aileen will help scope your matter and objectives.
                        </p>
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                display: 'inline-block',
                                backgroundColor: isHovered ? '#8E683D' : '#A0784A',
                                color: '#FFFFFF',
                                padding: '14px 32px',
                                borderRadius: '4px',
                                fontWeight: 600,
                                fontSize: '0.92rem',
                                letterSpacing: '0.08em',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                fontFamily: 'var(--font-inter)',
                                transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                                boxShadow: isHovered ? '0 4px 12px rgba(160,120,74,0.25)' : 'none'
                            }}
                        >
                            Book a Consultation →
                        </a>
                        <p style={{
                            fontFamily: 'var(--font-inter)',
                            color: 'rgba(44,44,42,0.45)',
                            fontSize: '0.72rem',
                            letterSpacing: '0.04em',
                            marginTop: '1.25rem'
                        }}>
                            30 MINUTE CONSULTATION · VIDEO CALL
                        </p>
                    </>
                ) : (
                    <>
                        <div style={{
                            marginBottom: '1.5rem',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '1px solid rgba(160,120,74,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.6
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A0784A" strokeWidth="1.5" />
                                <path d="M12 7V12L15 15" stroke="#A0784A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-inter)',
                            color: 'rgba(44,44,42,0.5)',
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            maxWidth: '240px'
                        }}>
                            Online booking coming soon. Professional engagements are currently accepted via brief.
                        </p>
                        <button
                            onClick={() => document.getElementById('brief-form')?.scrollIntoView({ behavior: 'smooth' })}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                border: '1px solid rgba(160,120,74,0.5)',
                                color: '#A0784A',
                                backgroundColor: isHovered ? 'rgba(160,120,74,0.05)' : 'transparent',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'var(--font-inter)',
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Submit a brief instead →
                        </button>
                    </>
                )}
            </motion.div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginTop: '2rem' }}>
                {['LLB', 'LLM (IP)', 'Patent Agent KIPI', 'IP Agent ARIPO'].map((pill, i) => (
                    <span key={i} style={{
                        border: '1px solid rgba(160,120,74,0.15)',
                        backgroundColor: 'rgba(160,120,74,0.03)',
                        color: 'rgba(160,120,74,0.7)',
                        padding: '5px 14px',
                        borderRadius: '100px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        fontFamily: 'var(--font-inter)'
                    }}>
                        {pill}
                    </span>
                ))}
            </div>
        </div>
    )
}
