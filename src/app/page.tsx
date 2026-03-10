'use client'

import HeroSection from '@/components/sections/HeroSection'
import InstitutionsCarousel from '@/components/sections/InstitutionsCarousel'
import AuthorityStatement from '@/components/sections/AuthorityStatement'
import PracticeAreasPreview from '@/components/sections/PracticeAreasPreview'
import LegalMattersPreview from '@/components/sections/LegalMattersPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import InstructionsPreview from '@/components/sections/InstructionsPreview'
import { profile } from '@/data/profile'
import { competencies } from '@/data/competencies'
import { caseStudies } from '@/data/caseStudies'
import { services } from '@/data/services'
import { institutions } from '@/data/institutions'

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection profile={profile} />
      <InstitutionsCarousel institutions={institutions} />
      <AuthorityStatement />
      <PracticeAreasPreview competencies={competencies} />
      <LegalMattersPreview caseStudies={caseStudies} />
      <TestimonialsPreview />
      <InstructionsPreview services={services} />
    </main>
  )
}
