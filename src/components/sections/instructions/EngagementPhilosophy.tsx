'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: (delay: number) => ({
        scaleX: 1,
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
}

export default function EngagementPhilosophy() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
        rootMargin: "-50px 0px"
    })

    return (
        <section className="bg-[#0D2B1F] py-16 md:py-24 w-full relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.8 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(160,120,74,0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />
            <div
                ref={ref}
                className="container mx-auto px-4 md:px-6 relative z-10 text-center"
                style={{ maxWidth: '840px' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <motion.div
                        custom={0.3}
                        variants={lineVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-8 md:w-12 h-px bg-[#A0784A]/50 origin-right"
                    />
                    <span className="font-inter text-[#A0784A] text-[0.65rem] md:text-xs font-bold tracking-[0.2em] uppercase">
                        MY APPROACH
                    </span>
                    <motion.div
                        custom={0.45}
                        variants={lineVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-8 md:w-12 h-px bg-[#A0784A]/50 origin-left"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="font-playfair italic text-white/90 leading-[1.95] text-center"
                    style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)' }}
                >
                    "Over a decade of practice across Kenya's Judiciary, WIPO's global IP programme, regional policy reform at APSEA and commercial advocacy at Kazi Advocates LLP has produced a single conviction: that the quality of legal counsel is measured not by the volume of work produced but by the precision of its impact. I have guided inventors with no financial resources through international patent prosecution and achieved a 28% grant rate. I have built governance accountability systems at one of Kenya's most significant public institutions and achieved an 85% resolution implementation rate. I have repositioned a firm's entire advisory model and delivered a 30% reduction in client legal expenditure. None of these outcomes were accidental. They were the product of rigorous preparation, commercially grounded strategy and an unwillingness to accept that good enough is ever sufficient. Every mandate I take on, whether a board advisory, a patent prosecution, a compliance framework or a complex dispute, receives the same discipline. I do not scale my standards to the size of the matter. I bring the full weight of my training, credentials and experience to every engagement, because the organisations and individuals who instruct me deserve nothing less."
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-16 h-px bg-[#A0784A]/60 mx-auto mt-12 mb-6 origin-center"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="font-inter text-[#A0784A]/85 textxs tracking-[0.2em] uppercase text-center"
                >
                    Nairobi, Kenya. East Africa and beyond.
                </motion.div>
            </div>
        </section>
    )
}
