'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function DirectContact() {
    return (
        <section className="bg-[#1C1C1A]" style={{ backgroundColor: '#1C1C1A', paddingTop: 'clamp(2.5rem, 8vh, 5rem)', paddingBottom: 'clamp(2.5rem, 8vh, 5rem)' }}>
            <div style={{ maxWidth: '1100px', margin: 'auto', paddingInline: 'max(2rem, 4vw)' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2rem'
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
                        DIRECT CONTACT
                    </span>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ flex: '1 1 400px', maxWidth: '540px' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                            style={{
                                fontFamily: 'var(--font-inter)',
                                color: 'rgba(255,255,255,0.65)',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                                fontWeight: 300
                            }}
                        >
                            Prefer to reach out directly? All enquiries are treated with strict professional confidentiality.
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                            {[
                                { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                                { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
                                { label: 'LinkedIn', value: 'Aluso Ingati', href: profile.linkedin }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 + i * 0.1 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
                                >
                                    <span style={{
                                        color: '#A0784A',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-inter)',
                                        opacity: 0.9
                                    }}>
                                        {item.label}
                                    </span>
                                    <a
                                        href={item.href}
                                        target={item.label === 'LinkedIn' ? "_blank" : undefined}
                                        rel={item.label === 'LinkedIn' ? "noopener noreferrer" : undefined}
                                        style={{
                                            color: 'rgba(255,255,255,0.9)',
                                            fontSize: '1.05rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            fontFamily: 'var(--font-inter)',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#A0784A'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                                    >
                                        {item.value}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
                        style={{ flex: '1 1 300px', maxWidth: '400px', display: 'flex', alignItems: 'flex-start', paddingTop: '0.5rem' }}
                    >
                        <p style={{
                            fontFamily: 'var(--font-playfair)',
                            fontStyle: 'italic',
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '1.25rem',
                            lineHeight: 1.8,
                            position: 'relative',
                            paddingLeft: '1.5rem',
                            borderLeft: '1px solid rgba(160, 120, 74, 0.2)'
                        }}>
                            Every engagement begins with a conversation. Whether you submit a brief, book a call or reach out directly, you will receive the same level of attention and the same commitment to outcome.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
