'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services } from '@/data/services'
import { Service } from '@/types'

function ServiceCard({ service, index }: { service: Service, index: number }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    })

    let engagementType = 'Project Based'
    if (service.id === 'corporate-legal-advisory') engagementType = 'Retainer'
    else if (service.id === 'ip-strategy-patent-prosecution') engagementType = 'Advisory'

    return (
        <motion.div
            id={service.id}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}
            className="w-full bg-white flex flex-col md:flex-row items-stretch md:items-start transition-all"
            style={{
                borderLeft: '4px solid #A0784A',
                borderRadius: '0 8px 8px 0',
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                marginBottom: '2.5rem',
                gap: 'clamp(2rem, 4vw, 4rem)'
            }}
        >
            <div className="flex-1 min-w-0">
                <div className="font-inter text-[#A0784A] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="font-playfair text-[#2C2C2A] text-xl md:text-2xl font-semibold leading-tight mb-4">
                    {service.title}
                </h3>

                <div style={{
                    width: '60px',
                    height: '2px',
                    backgroundColor: 'rgba(160,120,74,0.3)',
                    marginBottom: '1.5rem'
                }} />

                <p className="font-inter text-[#2C2C2A]/75 text-sm md:text-base leading-relaxed mb-6 block">
                    {service.description}
                </p>

                <div className="font-inter text-[#A0784A] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3">
                    Ideal For
                </div>

                <div className="flex flex-wrap gap-2">
                    {service.idealFor.map((item: string, i: number) => (
                        <span key={i} className="font-inter bg-[#A0784A]/[0.05] border border-[#A0784A]/20 text-[#2C2C2A]/80 px-3 py-1.5 rounded-full text-[0.8rem] font-medium transition-colors hover:bg-[#A0784A]/10">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="shrink-0 w-full md:w-[240px] border-t md:border-t-0 md:border-l border-[#A0784A]/20 pt-6 md:pt-0 md:pl-8 flex flex-col justify-start h-full">
                <div className="font-inter text-[#A0784A] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3">
                    Fee Basis
                </div>

                <p className="font-inter text-[#2C2C2A]/60 text-[0.85rem] leading-relaxed mb-6">
                    {service.pricing}
                </p>

                <div className="mt-auto">
                    <span className="inline-block font-inter border border-[#A0784A]/40 text-[#A0784A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#A0784A]/5">
                        {engagementType}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesSection() {
    return (
        <section className="bg-white py-16 md:py-20 w-full">
            <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: '1060px' }}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}
