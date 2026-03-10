'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timeline } from '@/data/timeline'

function TimelineEntry({ entry, index }: { entry: any, index: number }) {
    const [expanded, setExpanded] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            style={{ position: 'relative' }}
        >
            <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#A0784A',
                border: '3px solid #1C1C1A',
                transform: 'translateX(-5px)'
            }} />

            <div className="bg-[#141413] border border-white/5 rounded-lg p-5 md:p-7 hover:border-[#A0784A]/30 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#A0784A]/50 to-transparent" />

                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <div className="font-inter" style={{ color: '#C4976A', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                            {entry.startDate} {entry.endDate ? `- ${entry.endDate}` : '- Present'}
                        </div>

                        <h3 className="font-playfair text-white text-xl md:text-2xl font-semibold" style={{ marginBottom: '0.25rem' }}>
                            {entry.role}
                        </h3>

                        <div className="font-inter" style={{ color: '#C4976A', fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                            {entry.organisation}
                        </div>
                    </div>
                    {entry.logoPath && (
                        <div className="shrink-0 relative flex items-center justify-center p-2 bg-white/5 rounded border border-white/10" style={{ width: '64px', height: '64px', marginTop: '4px' }}>
                            <img src={entry.logoPath} alt={`${entry.organisation} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                    )}
                </div>

                <div className="font-inter" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginBottom: '1rem' }}>
                    {entry.location}
                </div>

                {entry.responsibilities && entry.responsibilities.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                        <ul className="space-y-3">
                            {entry.responsibilities.slice(0, 3).map((r: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span style={{ color: '#A0784A', fontSize: '0.75rem', marginTop: '4px' }}>■</span>
                                    <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{r}</span>
                                </li>
                            ))}
                        </ul>

                        {entry.responsibilities.length > 3 && (
                            <>
                                <AnimatePresence>
                                    {expanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <ul className="space-y-3 pt-3">
                                                {entry.responsibilities.slice(3).map((r: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span style={{ color: '#A0784A', fontSize: '0.75rem', marginTop: '4px' }}>■</span>
                                                        <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        marginTop: '1.25rem',
                                        border: '1px solid rgba(160, 120, 74, 0.3)',
                                        color: '#A0784A',
                                        backgroundColor: 'rgba(160, 120, 74, 0.05)',
                                        padding: '6px 14px',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.05em',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    className="hover:bg-[rgba(160,120,74,0.15)] hover:border-[rgba(160,120,74,0.6)]"
                                >
                                    {expanded ? 'Collapse Responsibilities' : 'View Responsibilities'}
                                    <motion.span
                                        animate={{ rotate: expanded ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {expanded ? '↑' : '↓'}
                                    </motion.span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className="mb-6 md:mb-8" />
        </motion.div>
    )
}

export default function CareerTimeline() {
    return (
        <section className="py-16 md:py-24 w-full relative overflow-hidden" style={{ backgroundColor: '#1C1C1A' }}>
            {/* Subtle animated background gradient */}
            <motion.div
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.4,
                    backgroundImage: 'radial-gradient(circle at center, rgba(160, 120, 74, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13, 43, 31, 0.2) 0%, transparent 40%)',
                    backgroundSize: '200% 200%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: '#A0784A' }} />
                    <span style={{ color: '#A0784A', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700 }}>
                        Career in Practice
                    </span>
                    <div style={{ width: '40px', height: '1px', backgroundColor: '#A0784A' }} />
                </div>

                <h2 className="font-playfair text-white text-3xl md:text-5xl text-center" style={{ marginBottom: '3.5rem' }}>
                    A Decade of Legal Excellence
                </h2>

                <div style={{
                    position: 'relative',
                    paddingLeft: '2.5rem',
                    maxWidth: '860px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '1.5rem',
                        bottom: '0',
                        width: '2px',
                        backgroundColor: 'rgba(160, 120, 74, 0.2)'
                    }} />

                    {timeline.map((entry, index) => (
                        <TimelineEntry key={entry.id} entry={entry} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
