import { caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import MatterHeader from '@/components/sections/legal-matters/detail/MatterHeader'
import MatterContextChallenge from '@/components/sections/legal-matters/detail/MatterContextChallenge'
import MatterPhases from '@/components/sections/legal-matters/detail/MatterPhases'
import MatterOutcomes from '@/components/sections/legal-matters/detail/MatterOutcomes'
import MatterAchievements from '@/components/sections/legal-matters/detail/MatterAchievements'
import MatterTakeaway from '@/components/sections/legal-matters/detail/MatterTakeaway'
import MatterConclusion from '@/components/sections/legal-matters/detail/MatterConclusion'
import MatterProficiencies from '@/components/sections/legal-matters/detail/MatterProficiencies'
import MatterCompetencies from '@/components/sections/legal-matters/detail/MatterCompetencies'
import MatterNavigation from '@/components/sections/legal-matters/detail/MatterNavigation'

export async function generateStaticParams() {
    return caseStudies.map((matter) => ({ slug: matter.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const matter = caseStudies.find((m) => m.id === resolvedParams.slug)
    if (!matter) return {}
    return {
        title: `${matter.title} | Aileen Ingati`,
        description: matter.executiveSummary.slice(0, 160),
    }
}

export default async function MatterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const matter = caseStudies.find((m) => m.id === resolvedParams.slug)
    if (!matter) notFound()

    const currentIndex = caseStudies.findIndex((m) => m.id === resolvedParams.slug)
    const prevMatter = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
    const nextMatter = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

    return (
        <main>
            <MatterHeader matter={matter} />
            <MatterContextChallenge matter={matter} />
            <MatterPhases matter={matter} />
            <MatterOutcomes matter={matter} />
            <MatterAchievements matter={matter} />
            <MatterTakeaway matter={matter} />
            <MatterConclusion matter={matter} />
            <MatterProficiencies matter={matter} />
            <MatterCompetencies matter={matter} />
            <MatterNavigation matter={matter} prevMatter={prevMatter} nextMatter={nextMatter} />
        </main>
    )
}
