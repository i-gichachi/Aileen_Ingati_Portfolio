'use client'

import { motion } from 'framer-motion'

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: (delay: number) => ({
        scaleX: 1,
        transition: { duration: 0.5, delay, ease: 'easeOut' as const },
    }),
}

export default function PageIntro() {
    return (
        <section
            className="bg-warm-ivory w-full relative overflow-hidden"
            style={{ backgroundColor: '#FAF8F3', paddingTop: '7rem', paddingBottom: '4rem' }}
        >
            {/* Subtle ambient gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 70% 0%, rgba(160,120,74,0.08) 0%, transparent 55%), radial-gradient(ellipse at 20% 100%, rgba(13,43,31,0.05) 0%, transparent 50%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10" style={{ maxWidth: '860px' }}>
                {/* Animated eyebrow with flanking rules */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.75rem' }}
                >
                    <motion.div
                        custom={0.2}
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            width: '36px',
                            height: '1px',
                            backgroundColor: '#A0784A',
                            transformOrigin: 'left',
                        }}
                    />
                    <span
                        style={{
                            color: '#A0784A',
                            fontSize: '0.65rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                        }}
                    >
                        Practice Areas
                    </span>
                    <motion.div
                        custom={0.35}
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            width: '36px',
                            height: '1px',
                            backgroundColor: '#A0784A',
                            transformOrigin: 'left',
                        }}
                    />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
                    className="font-playfair"
                    style={{
                        color: '#2C2C2A',
                        fontWeight: 600,
                        fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                        lineHeight: 1.15,
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Where Legal Authority Meets
                    <br className="hidden md:block" /> Strategic Execution
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
                    className="font-inter"
                    style={{
                        color: 'rgba(44,44,42,0.58)',
                        fontSize: '0.95rem',
                        letterSpacing: '0.025em',
                        lineHeight: 1.6,
                    }}
                >
                    Nine areas of practice. Three pillars of expertise. One decade of results.
                </motion.p>

                {/* Animated accent rule */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                    style={{
                        marginTop: '2.5rem',
                        height: '1px',
                        backgroundColor: 'rgba(160, 120, 74, 0.22)',
                        transformOrigin: 'left',
                    }}
                />
            </div>
        </section>
    )
}
