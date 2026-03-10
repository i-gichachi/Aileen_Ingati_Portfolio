// src/app/instructions/page.tsx
import PageIntro from '@/components/sections/instructions/PageIntro'
import ServicesSection from '@/components/sections/instructions/ServicesSection'
import EngagementPhilosophy from '@/components/sections/instructions/EngagementPhilosophy'
import ProfessionalConduct from '@/components/sections/instructions/ProfessionalConduct'

export const metadata = {
    title: 'Instructions | Aileen Ingati',
    description: 'Four areas of engagement. Senior legal counsel across corporate advisory, litigation, intellectual property and regulatory compliance. Based in Nairobi, Kenya.',
}

export default function InstructionsPage() {
    return (
        <main>
            <PageIntro />
            <ServicesSection />
            <EngagementPhilosophy />
            <ProfessionalConduct />
        </main>
    )
}
