'use client'

import { motion } from 'framer-motion'
import { PageIntro, DualEngagement, DirectContact } from '../../components/sections/brief-me'

export default function BriefMePage() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: 'clamp(60px, 10vh, 100px)' }} // Clearance for fixed navbar
        >
            <PageIntro />
            <DualEngagement />
            <DirectContact />
        </motion.main>
    )
}
