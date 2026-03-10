'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonials } from '@/data/testimonials'

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.65, delay: i * 0.14, ease: 'easeOut' as const },
    }),
}

export default function CounselTestimonials() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section id="testimonials" className="py-16 md:py-24 w-full relative overflow-hidden" style={{ backgroundColor: '#1C1C1A' }}>
            {/* Subtle background shimmer */}
            <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(13, 43, 31, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(160, 120, 74, 0.04) 0%, transparent 40%)',
                    backgroundSize: '200% 200%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 16 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'right' }}
                        />
                        <span style={{ color: '#A0784A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                            What Colleagues Say
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                    </div>

                    <h2 className="font-playfair text-white text-3xl md:text-4xl text-center" style={{ marginBottom: '1rem' }}>
                        Testimonials
                    </h2>

                    <p className="font-inter text-center" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '2.5rem' }}>
                        Trusted by legal professionals, institutional leaders and innovators across East Africa and beyond.
                    </p>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.length === 0 ? (
                        <>
                            {[1, 2].map((_, i) => (
                                <motion.div
                                    key={`placeholder-${i}`}
                                    custom={i}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    style={{
                                        backgroundColor: '#0D2B1F',
                                        border: '1px dashed rgba(160, 120, 74, 0.25)',
                                        borderRadius: '6px',
                                        padding: '2rem',
                                        minHeight: '200px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    <span style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1.25rem',
                                        fontFamily: 'var(--font-playfair)',
                                        fontSize: '4rem',
                                        lineHeight: 1,
                                        color: 'rgba(160, 120, 74, 0.15)',
                                        fontWeight: 700,
                                    }}>
                                        &ldquo;
                                    </span>
                                    <div className="font-inter" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>
                                        Testimonials coming soon.
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    ) : (
                        testimonials.map((testimonial, i) => (
                            <motion.div
                                key={testimonial.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                whileHover={{
                                    y: -5,
                                    borderColor: 'rgba(160, 120, 74, 0.45)',
                                    boxShadow: '0 12px 32px rgba(160, 120, 74, 0.1)',
                                }}
                                style={{
                                    backgroundColor: '#0D2B1F',
                                    border: '1px solid rgba(160, 120, 74, 0.2)',
                                    borderRadius: '6px',
                                    padding: '2rem',
                                    position: 'relative',
                                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                                }}
                            >
                                <span style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1.25rem',
                                    fontFamily: 'var(--font-playfair)',
                                    fontSize: '4rem',
                                    lineHeight: 1,
                                    color: 'rgba(160, 120, 74, 0.15)',
                                    fontWeight: 700,
                                }}>
                                    &ldquo;
                                </span>
                                <p className="font-playfair italic text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div style={{ width: '40px', height: '1px', backgroundColor: '#A0784A', marginBottom: '1rem' }} />
                                <h4 className="font-inter text-white font-semibold text-sm">
                                    {testimonial.name}
                                </h4>
                                <div className="font-inter" style={{ color: '#C4976A', fontSize: '0.75rem', marginTop: '4px' }}>
                                    {testimonial.role}, {testimonial.organisation}
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
