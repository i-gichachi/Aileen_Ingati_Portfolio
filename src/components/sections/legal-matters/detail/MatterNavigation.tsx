'use client'

import { caseStudies } from '@/data/caseStudies'
import Link from 'next/link'

export default function MatterNavigation({
    matter,
    prevMatter,
    nextMatter
}: {
    matter: typeof caseStudies[0]
    prevMatter: typeof caseStudies[0] | null
    nextMatter: typeof caseStudies[0] | null
}) {
    return (
        <section className="py-10 md:py-14 px-6 lg:px-12" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(160,120,74,0.15)' }}>
            <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem' }}>

                <div>
                    {prevMatter ? (
                        <Link href={`/legal-matters/${prevMatter.id}`} className="font-inter hover:opacity-80 transition-opacity" style={{ color: '#A0784A', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '1rem' }}>←</span> {prevMatter.matterNumber}
                        </Link>
                    ) : (
                        <Link href="/legal-matters" className="font-inter hover:opacity-80 transition-opacity" style={{ color: 'rgba(44,44,42,0.5)', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '1rem' }}>←</span> All Legal Matters
                        </Link>
                    )}
                </div>

                <div className="font-inter" style={{ color: 'rgba(44,44,42,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                    {matter.matterNumber}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {nextMatter ? (
                        <Link href={`/legal-matters/${nextMatter.id}`} className="font-inter hover:opacity-80 transition-opacity" style={{ color: '#A0784A', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                            {nextMatter.matterNumber} <span style={{ fontSize: '1rem' }}>→</span>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>

            </div>
        </section>
    )
}
