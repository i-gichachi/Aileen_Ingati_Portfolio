'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function RecognitionAward() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-16 md:py-24 w-full relative overflow-hidden" style={{ backgroundColor: '#0D2B1F' }}>
            {/* Animated radial glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, rgba(160, 120, 74, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            {/* Floating decorative circles */}
            <motion.div
                animate={{ y: [0, -14, 0], opacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '8%',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    border: '1px solid rgba(160, 120, 74, 0.12)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <motion.div
                animate={{ y: [0, 12, 0], opacity: [0.04, 0.1, 0.04] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '5%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    border: '1px solid rgba(160, 120, 74, 0.1)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1.5rem' }}
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'right' }}
                        />
                        <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                            Recognition
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="font-playfair text-white text-3xl md:text-4xl font-semibold"
                        style={{ marginBottom: '1.5rem' }}
                    >
                        Africa&apos;s 100 Most Influential Women in the Legal Profession
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="font-inter"
                        style={{ color: '#C4976A', fontVariant: 'small-caps', letterSpacing: '0.12em', fontSize: '0.875rem' }}
                    >
                        Courtroom Mail SHID Award · 8th March 2022
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        style={{ width: '60px', height: '1px', backgroundColor: '#A0784A', margin: '1.5rem auto', transformOrigin: 'center' }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="font-playfair italic text-base leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}
                    >
                        &ldquo;The Courtroom Mail 100 recognises Africa&apos;s most influential women shaping the legal profession across the continent. Awarded by the SHID Foundation, this recognition places Aileen among an elite cohort of legal professionals whose work has demonstrably advanced justice, governance and the rule of law across African jurisdictions.&rdquo;
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.85 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.7)' }}
                        style={{
                            display: 'inline-block',
                            marginTop: '2rem',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            color: '#FFFFFF',
                            padding: '6px 20px',
                            borderRadius: '100px',
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            fontWeight: 500,
                            cursor: 'default',
                            transition: 'border-color 0.2s',
                        }}
                    >
                        Courtroom Mail 100 · 2022
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
