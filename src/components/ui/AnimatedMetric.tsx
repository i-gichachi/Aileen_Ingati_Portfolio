'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedMetric({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/)
    const count = useMotionValue(0)

    const rounded = useTransform(count, (latest) => {
        if (!match) return latest.toString()
        const numStr = match[2]
        const isInt = numStr.indexOf('.') === -1
        return isInt ? Math.round(latest).toString() : latest.toFixed(1)
    })

    useEffect(() => {
        if (!match || !isInView) return
        const num = parseFloat(match[2])
        const controls = animate(count, num, { duration: 2.5, ease: "easeOut" })
        return controls.stop
    }, [value, count, isInView]) // triggered when scrolled into view

    if (!match) {
        return <>{value}</>
    }

    return (
        <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            {match[1]}<motion.span>{rounded}</motion.span>{match[3]}
        </span>
    )
}
