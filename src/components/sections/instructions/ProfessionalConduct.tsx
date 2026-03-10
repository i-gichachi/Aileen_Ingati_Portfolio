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

const conductItems = [
    {
        heading: 'Confidentiality',
        body: 'Every enquiry and instruction received through this practice is treated with strict professional confidentiality. Aileen operates in accordance with the Law Society of Kenya\'s professional conduct rules and the ethical obligations of an Advocate of the High Court of Kenya. No matter or client information is disclosed without express authorisation.'
    },
    {
        heading: 'Professional Standing',
        body: 'Aileen Ingati is an Advocate of the High Court of Kenya, a certified Patent Agent with the Kenya Industrial Property Institute, a registered Intellectual Property Agent with ARIPO, a WIPO Inventor Assistance Program Specialist and a Data Protection certified practitioner from CIPIT at Strathmore Law School. Recognised among Africa\'s 100 Most Influential Women in the Legal Profession by the Courtroom Mail 100 SHID Award in 2022 and appointed Board Member at KIPI in August 2025, she brings formal institutional credibility to every engagement she takes on.'
    },
    {
        heading: 'How to Instruct',
        body: 'Submit your brief through the Brief Me page. Provide a concise summary of your matter, the organisation or individual involved and the outcome you are seeking. Aileen will review your submission and respond within two working days to confirm scope, terms and the proposed engagement structure. Complex or multi-jurisdictional matters are welcome.'
    }
]

export default function ProfessionalConduct() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    })

    return (
        <section className="bg-[#FAF8F3] py-16 md:py-24 w-full relative">
            <div
                ref={ref}
                className="container mx-auto px-4 md:px-6 relative z-10"
                style={{ maxWidth: '1100px' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center gap-4 mb-16"
                >
                    <motion.div
                        custom={0.2}
                        variants={lineVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-8 md:w-12 h-px bg-[#A0784A]/30 origin-right"
                    />
                    <span className="font-inter text-[#A0784A] text-[0.7rem] md:text-sm font-bold tracking-[0.2em] uppercase">
                        PROFESSIONAL CONDUCT
                    </span>
                    <motion.div
                        custom={0.35}
                        variants={lineVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-8 md:w-12 h-px bg-[#A0784A]/30 origin-left"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {conductItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white border border-[#A0784A]/10 rounded-lg p-8 md:p-10 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                        >
                            <div className="w-8 h-8 bg-[#A0784A]/10 border border-[#A0784A]/20 rounded flex items-center justify-center mb-2">
                                <span className="text-[#A0784A] text-xs">■</span>
                            </div>

                            <h3 className="font-playfair text-[#2C2C2A] text-xl font-semibold mb-1">
                                {item.heading}
                            </h3>

                            <p className="font-inter text-[#2C2C2A]/70 text-sm md:text-[0.9rem] leading-relaxed">
                                {item.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
