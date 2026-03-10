import PageIntro from '@/components/sections/legal-matters/PageIntro'
import MattersList from '@/components/sections/legal-matters/MattersList'

export const metadata = {
    title: 'Legal Matters | Aileen Ingati',
    description: 'Selected legal engagements across intellectual property, litigation and governance. Senior Legal Counsel and IP Specialist serving East Africa and beyond.',
}

export default function LegalMattersPage() {
    return (
        <main>
            <PageIntro />
            <MattersList />
        </main>
    )
}
