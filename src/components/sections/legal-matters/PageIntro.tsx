'use client'

import { motion } from 'framer-motion'

export default function PageIntro() {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24" style={{ backgroundColor: '#FAF8F3' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', padding: '0 max(2rem, 4vw)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                        <span style={{ color: '#A0784A', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                            LEGAL MATTERS
                        </span>
                        <div style={{ height: '1px', backgroundColor: 'rgba(160, 120, 74, 0.3)', width: '40px' }} />
                    </div>

                    <h1 className="font-playfair md:text-5xl text-3xl" style={{ color: '#2C2C2A', fontWeight: 600, marginBottom: '1.25rem' }}>
                        Selected Engagements
                    </h1>

                    <p className="font-inter" style={{ color: 'rgba(44,44,42,0.6)', fontSize: '0.95rem', margin: 0 }}>
                        Five matters. Three practice areas. One consistent outcome.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
