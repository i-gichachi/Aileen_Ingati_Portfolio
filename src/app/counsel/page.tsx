import CounselSnapshot from '@/components/sections/counsel/CounselSnapshot'
import CareerTimeline from '@/components/sections/counsel/CareerTimeline'
import EducationQualifications from '@/components/sections/counsel/EducationQualifications'
import ProfessionalMemberships from '@/components/sections/counsel/ProfessionalMemberships'
import RecognitionAward from '@/components/sections/counsel/RecognitionAward'
import CounselTestimonials from '@/components/sections/counsel/CounselTestimonials'

export const metadata = {
    title: 'Counsel | Aileen Ingati',
    description: 'Professional profile, career history and credentials of Aileen Ingati, Senior Legal Counsel and IP Specialist.',
}

export default function CounselPage() {
    return (
        <main>
            <CounselSnapshot />
            <CareerTimeline />
            <EducationQualifications />
            <ProfessionalMemberships />
            <RecognitionAward />
            <CounselTestimonials />
        </main>
    )
}
