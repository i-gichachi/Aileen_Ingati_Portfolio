export interface Profile {
    name: string
    roleTitle: string
    tagline: string
    professionalSummary: string
    email: string
    phone: string
    location: string
    linkedin: string
    calendlyUrl: string
}

export interface TimelineEntry {
    id: string
    role: string
    organisation: string
    location: string
    startDate: string
    endDate: string
    isCurrent: boolean
    isKeyMilestone: boolean
    description?: string
    responsibilities?: string[]
    logoPath?: string
}

export interface Education {
    id: string
    degree: string
    institution: string
    year: string
    logoPath?: string
}

export interface Certification {
    id: string
    name: string
    issuingBody: string
    year: string
    logoPath?: string
}

export interface Membership {
    id: string
    role: string
    organisation: string
    period?: string
    isCurrent: boolean
    logoPath?: string
}

export interface Award {
    id: string
    name: string
    organisation: string
    date: string
    description: string
}

export interface Competency {
    id: string
    title: string
    pillar: 'intellectual-property' | 'litigation' | 'governance'
    pillarLabel: string
    paragraph: string
}

export interface Phase {
    label: string
    points: string[]
}

export interface ResultItem {
    text: string
    metric?: string
}

export interface CaseStudy {
    id: string
    matterNumber: string
    title: string
    organisation: string
    dateRange: string
    keyMetric: string
    keyMetricLabel: string
    executiveSummary: string
    context: string
    challenge: string
    phases: Phase[]
    quantifiableOutcomes: ResultItem[]
    qualitativeAchievements: string[]
    keyTakeaway: string
    conclusion: string
    technicalProficiencies: { tool: string; description: string }[]
    coreCompetencies: string[]
    logoPath?: string
}

export interface Service {
    id: string
    title: string
    description: string
    idealFor: string[]
    pricing: string
}

export interface Institution {
    id: string
    name: string
    logoPath: string
}

export interface Tool {
    id: string
    name: string
}

export interface Testimonial {
    id: string
    name: string
    role: string
    organisation: string
    quote: string
}
