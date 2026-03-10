'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { tools } from '@/data/tools'

// Category map — keyed by tool id, no data file modification needed
const TOOL_CATEGORIES: Record<string, string> = {
    'ms-office': 'Productivity',
    'google-workspace': 'Productivity',
    'excel': 'Analytics',
    'trello': 'Project Management',
    'google-analytics': 'Analytics',
    'adobe-acrobat': 'Documents',
    'sharepoint': 'Collaboration',
    'monday': 'Project Management',
    'notion': 'Knowledge Management',
    'ms-teams': 'Collaboration',
    'slack': 'Collaboration',
    'zoom': 'Communication',
}

// Derive unique, ordered categories from the tools list
const CATEGORY_ORDER = [
    'Productivity',
    'Project Management',
    'Collaboration',
    'Analytics',
    'Knowledge Management',
    'Documents',
    'Communication',
]

const categoryVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const },
    }),
}

export default function ToolsPlatforms() {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.08 })

    // Build the canonical list of categories present in the tools data
    const categories = CATEGORY_ORDER.filter((cat) =>
        tools.some((t) => TOOL_CATEGORIES[t.id] === cat)
    )

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                backgroundColor: '#1C1C1A',
                paddingTop: 'clamp(3.5rem, 6vw, 4.5rem)',
                paddingBottom: 'clamp(3.75rem, 6vw, 5rem)'
            }}
        >
            {/* Slow ambient orb matching timeline experience section */}
            <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.55,
                    backgroundImage:
                        'radial-gradient(circle at 90% 15%, rgba(160,120,74,0.09) 0%, transparent 45%), ' +
                        'radial-gradient(circle at 8%  85%, rgba(13,43,31,0.35) 0%, transparent 45%)',
                    backgroundSize: '200% 200%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 15 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ marginBottom: '2.5rem' }}
                >
                    {/* Eyebrow label */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.85rem' }}
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ width: '24px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                        <span
                            className="font-inter"
                            style={{
                                color: '#A0784A',
                                fontSize: '0.65rem',
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                            }}
                        >
                            Working Methods
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ width: '24px', height: '1px', backgroundColor: '#A0784A', transformOrigin: 'left' }}
                        />
                    </motion.div>

                    <h2
                        className="font-playfair"
                        style={{
                            color: '#FFFFFF',
                            fontWeight: 600,
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                            lineHeight: 1.2,
                            marginBottom: '0.75rem',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Tools and Platforms
                    </h2>
                    <p
                        className="font-inter"
                        style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            maxWidth: '520px',
                        }}
                    >
                        The platforms and systems that support rigorous, efficient and well-documented legal
                        practice.
                    </p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={headerInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{
                            marginTop: '1.75rem',
                            height: '1px',
                            backgroundColor: 'rgba(160, 120, 74, 0.2)',
                            transformOrigin: 'left',
                        }}
                    />
                </motion.div>

                {/* Grouped pill cloud */}
                <div ref={gridRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}>
                    {categories.map((category, i) => {
                        const categoryTools = tools.filter((t) => TOOL_CATEGORIES[t.id] === category)
                        return (
                            <motion.div
                                key={category}
                                custom={i}
                                variants={categoryVariants}
                                initial="hidden"
                                animate={gridInView ? 'visible' : 'hidden'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                    <div style={{ width: '12px', height: '1px', backgroundColor: 'rgba(160,120,74,0.5)' }} />
                                    <p
                                        className="font-inter"
                                        style={{
                                            color: '#A0784A',
                                            fontSize: '0.62rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                        }}
                                    >
                                        {category}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                    {categoryTools.map((tool) => (
                                        <motion.div
                                            key={tool.id}
                                            whileHover={{
                                                backgroundColor: '#FFFFFF',
                                                borderColor: 'rgba(160,120,74,0.5)',
                                                color: '#1C1C1A',
                                                boxShadow: '0 4px 14px rgba(160,120,74,0.2)',
                                                y: -2,
                                            }}
                                            style={{
                                                backgroundColor: '#141413',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                borderRadius: '100px',
                                                padding: '6px 16px',
                                                fontSize: '0.8125rem',
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,0.85)',
                                                letterSpacing: '0.01em',
                                                cursor: 'default',
                                                transition: 'all 0.2s ease',
                                                fontFamily: 'var(--font-inter)',
                                            }}
                                        >
                                            {tool.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
