import PageIntro from '@/components/sections/practice-areas/PageIntro'
import PillarOne from '@/components/sections/practice-areas/PillarOne'
import PillarTwo from '@/components/sections/practice-areas/PillarTwo'
import PillarThree from '@/components/sections/practice-areas/PillarThree'
import ToolsPlatforms from '@/components/sections/practice-areas/ToolsPlatforms'

export const metadata = {
    title: 'Practice Areas | Aileen Ingati',
    description:
        'Nine areas of legal practice across intellectual property, litigation and governance. Senior Legal Counsel and IP Specialist serving East Africa and beyond.',
}

export default function PracticeAreasPage() {
    return (
        <main>
            <PageIntro />
            <PillarOne />
            <PillarTwo />
            <PillarThree />
            <ToolsPlatforms />
        </main>
    )
}
