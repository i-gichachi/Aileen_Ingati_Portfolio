'use client'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
    }
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: (delay: number) => ({
        scaleX: 1,
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
}

export default function PageIntro() {
    return (
        <section
            className="bg-[#FAF8F3] pt-24 pb-12 md:pt-32 md:pb-16 w-full relative overflow-hidden"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 md:px-6 relative z-10 text-center"
                style={{ maxWidth: '860px' }}
            >
                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '1.5rem' }}
                >
                    <motion.div
                        custom={0.2}
                        variants={lineVariants}
                        style={{
                            width: '36px',
                            height: '1px',
                            backgroundColor: 'rgba(160,120,74,0.3)',
                            transformOrigin: 'right',
                        }}
                    />
                    <span style={{
                        color: '#A0784A',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                    }}>
                        INSTRUCTIONS
                    </span>
                    <motion.div
                        custom={0.35}
                        variants={lineVariants}
                        style={{
                            width: '36px',
                            height: '1px',
                            backgroundColor: 'rgba(160,120,74,0.3)',
                            transformOrigin: 'left',
                        }}
                    />
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="font-playfair text-[#2C2C2A] font-semibold tracking-tight"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: 1.15,
                        marginBottom: '1.25rem'
                    }}
                >
                    How I Work With You
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="font-inter text-[#2C2C2A]/60"
                    style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}
                >
                    Four areas of engagement. Clear terms. Senior counsel from day one.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                >
                    <hr style={{
                        width: '100%',
                        borderColor: 'rgba(160,120,74,0.15)',
                        marginTop: '3.5rem',
                        borderWidth: '0 0 1px 0'
                    }} />
                </motion.div>
            </motion.div>
        </section>
    )
}
