'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PILLS = ['LLB', 'LLM (IP)', 'Patent Agent KIPI', 'IP Agent ARIPO', 'WIPO IAP Specialist', 'Courtroom Mail 100 2022']

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: 'easeOut' as const },
    },
}

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const },
    }),
}

const portraitVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' as const },
    },
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' as const } },
}

export default function CounselSnapshot() {
    const shouldReduceMotion = useReducedMotion()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 w-full relative overflow-hidden" style={{ backgroundColor: '#F0F0EE' }}>
            {/* Animated background gradient orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 85% 10%, rgba(160, 120, 74, 0.1) 0%, transparent 35%), radial-gradient(circle at 15% 90%, rgba(13, 43, 31, 0.07) 0%, transparent 35%)'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Animated eyebrow */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ width: '30px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                    />
                    <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                        Counsel
                    </span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        style={{ width: '30px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                    />
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    style={{
                        backgroundColor: '#EEF4F0',
                        border: '1px solid rgba(13, 43, 31, 0.12)',
                        borderRadius: '8px',
                        maxWidth: '1100px',
                        margin: '0 auto',
                        overflow: 'hidden',
                    }}
                    className="p-6 md:p-12"
                >
                    {/* Portrait – desktop: floated right */}
                    <motion.div
                        variants={portraitVariants}
                        className="hidden md:flex flex-col items-center justify-center shrink-0 relative overflow-hidden"
                        style={{
                            float: 'right',
                            width: '200px',
                            height: '270px',
                            marginLeft: '2rem',
                            marginBottom: '1rem',
                            background: 'linear-gradient(160deg, #0f3324 0%, #0D2B1F 60%, #091f17 100%)',
                            borderRadius: '6px',
                            border: '1px solid rgba(160, 120, 74, 0.25)',
                        }}
                    >
                        {/* Subtle shimmer effect inside the portrait */}
                        <motion.div
                            animate={{ x: ['−100%', '200%'] }}
                            transition={{ duration: 2.5, delay: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(105deg, transparent 40%, rgba(196, 151, 106, 0.12) 50%, transparent 60%)',
                                pointerEvents: 'none',
                            }}
                        />
                        <span className="font-playfair text-white text-3xl font-bold">AAI</span>
                        <span className="font-inter mt-2" style={{ color: '#C4976A', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                            Advocate · Scholar · Leader
                        </span>
                    </motion.div>

                    {/* Portrait – mobile */}
                    <motion.div
                        variants={portraitVariants}
                        className="md:hidden flex flex-col items-center justify-center w-full mb-6 relative overflow-hidden"
                        style={{
                            height: '200px',
                            background: 'linear-gradient(160deg, #0f3324 0%, #0D2B1F 60%, #091f17 100%)',
                            borderRadius: '6px',
                            border: '1px solid rgba(160, 120, 74, 0.25)',
                        }}
                    >
                        <span className="font-playfair text-white text-3xl font-bold">AAI</span>
                        <span className="font-inter mt-2" style={{ color: '#C4976A', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                            Advocate · Scholar · Leader
                        </span>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-[#2C2C2A] text-base leading-relaxed opacity-90"
                    >
                        With over a decade of legal practice spanning litigation, research and regulatory advisory across East Africa&apos;s public and private sectors, I bring a rare combination of courtroom authority and boardroom counsel to every engagement. My career has been defined by the ability to translate complex legal requirements into practical strategies that serve institutional objectives, from supporting judicial decision-making at the Judiciary of Kenya to guiding inventors through international patent prosecution under WIPO&apos;s global IP programme. Equally at home managing high-stakes disputes and advising on corporate governance, I have built a practice grounded in rigorous analysis and commercial pragmatism. My work with government ministries on policy reform, my oversight of compliance frameworks for commercial clients, and my consistent delivery of measurable outcomes, including an 85% governance resolution rate and a 30% reduction in client legal expenditure, reflect a legal practice defined not by volume but by impact. I am now focused on applying this depth of experience to senior legal counsel roles at the intersection of corporate strategy and risk management.
                    </motion.p>

                    <div style={{ clear: 'both' }} />

                    <motion.div
                        variants={lineVariants}
                        style={{ width: '100%', height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.25)', margin: '1.5rem 0', transformOrigin: 'left' }}
                    />

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-3"
                    >
                        {PILLS.map((pill, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={pillVariants}
                                whileHover={{ scale: 1.06, borderColor: '#A0784A', backgroundColor: 'rgba(160, 120, 74, 0.08)' }}
                                className="font-inter text-xs font-medium cursor-default"
                                style={{
                                    color: '#2C2C2A',
                                    border: '1px solid #A0784A',
                                    borderRadius: '100px',
                                    padding: '4px 12px',
                                    transition: 'background-color 0.2s',
                                }}
                            >
                                {pill}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.a
                        variants={itemVariants}
                        href="/files/aileen-ingati-cv.pdf"
                        download
                        whileHover={{ scale: 1.04, backgroundColor: '#8C683F' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '1.5rem',
                            backgroundColor: '#A0784A',
                            color: '#FFFFFF',
                            padding: '12px 28px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            letterSpacing: '0.05em',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s ease',
                        }}
                    >
                        Download CV →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
