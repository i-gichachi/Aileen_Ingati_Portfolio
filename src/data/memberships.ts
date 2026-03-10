import { Membership, Award } from '@/types'

export const memberships: Membership[] = [

    {
        id: 'lsk-council',
        role: 'Council Member',
        organisation: 'Law Society of Kenya',
        period: 'February 2020 to March 2022',
        isCurrent: false,
    },
    {
        id: 'eals',
        role: 'Member',
        organisation: 'East Africa Law Society',
        period: '',
        isCurrent: true,
        logoPath: '/logos/East Africa Law Society_logo.png',
    },
    {
        id: 'apsea-member',
        role: 'Former Honorary Secretary',
        organisation: 'Association of Professional Societies in East Africa',
        period: '',
        isCurrent: false,
        logoPath: '/logos/Association of Professional Societies in East Africa_logo.jfif',
    },
    {
        id: 'commonwealth-lawyers',
        role: 'Former Kenya Representative to the Young Commonwealth Lawyers Association',
        organisation: 'Commonwealth Lawyers Association',
        period: '',
        isCurrent: false,
        logoPath: '/logos/Commonwealth Lawyers Association_logo.png',
    },
]

export const award: Award = {
    id: 'courtroom-mail-100',
    name: 'Courtroom Mail 100 (SHID)',
    organisation: 'Courtroom Mail',
    date: '8th March 2022',
    description: "Named Among Africa's 100 Most Influential Women in the Legal Profession",
}
