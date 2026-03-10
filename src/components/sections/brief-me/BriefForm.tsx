import { useState } from 'react'
import { motion } from 'framer-motion'

const fieldStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(44,44,42,0.15)',
    borderRadius: '4px',
    padding: '14px 18px',
    fontSize: '0.92rem',
    color: '#2C2C2A',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
    fontFamily: 'var(--font-inter)',
    boxSizing: 'border-box',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#2C2C2A',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
    fontFamily: 'var(--font-inter)',
    opacity: 0.8
}

const fieldGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    marginBottom: '1.5rem'
}

const errorStyle: React.CSSProperties = {
    color: '#B43C3C',
    fontSize: '0.75rem',
    marginTop: '0.4rem',
    fontFamily: 'var(--font-inter)',
    fontWeight: 500
}

const focusedStyle: React.CSSProperties = {
    borderColor: 'rgba(160,120,74,0.5)',
    boxShadow: '0 0 0 4px rgba(160,120,74,0.08), 0 2px 4px rgba(0,0,0,0.04)'
}

const errorBorderStyle: React.CSSProperties = {
    borderColor: 'rgba(180,60,60,0.4)',
    backgroundColor: '#FFFBFB'
}

export default function BriefForm({ contactEmail }: { contactEmail: string }) {
    const [matterType, setMatterType] = useState('')
    const [organisation, setOrganisation] = useState('')
    const [jurisdiction, setJurisdiction] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [isHovered, setIsHovered] = useState(false)

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!matterType) newErrors.matterType = 'Please select a matter type.'
        if (!organisation.trim()) newErrors.organisation = 'Please enter an organisation or name.'
        if (!jurisdiction.trim()) newErrors.jurisdiction = 'Please enter a jurisdiction.'
        if (description.trim().length < 20) newErrors.description = 'Please provide a brief description (min 20 chars).'
        if (!name.trim()) newErrors.name = 'Please enter your full name.'
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        const subject = encodeURIComponent(`Brief Submission: ${matterType}`)
        const body = encodeURIComponent(
            `BRIEF SUBMISSION
----------------
Matter Type: ${matterType}
Organisation or Individual: ${organisation}
Jurisdiction: ${jurisdiction}

Brief Description:
${description}

CONTACT DETAILS
---------------
Name: ${name}
Email: ${email}

Submitted via aileenaluso.com`
        )

        const mailtoHref = `mailto:${contactEmail}?subject=${subject}&body=${body}`
        window.location.href = mailtoHref
        setSubmitted(true)
    }

    const getFieldStyle = (fieldName: string, hasError: boolean) => ({
        ...fieldStyle,
        ...(focusedField === fieldName ? focusedStyle : {}),
        ...(hasError ? errorBorderStyle : {})
    })

    return (
        <div id="brief-form" style={{ maxWidth: '540px' }}>
            <h2 style={{
                fontFamily: 'var(--font-playfair)',
                color: '#2C2C2A',
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
            }}>
                Submit a Brief
            </h2>
            <p style={{
                color: 'rgba(44,44,42,0.6)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 400
            }}>
                Describe your matter in detail. Aileen will review and respond within two working days to confirm scope and terms.
            </p>

            <form onSubmit={handleSubmit}>
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Matter Type</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            value={matterType}
                            onChange={e => setMatterType(e.target.value)}
                            onFocus={() => setFocusedField('matterType')}
                            onBlur={() => setFocusedField(null)}
                            style={{
                                ...getFieldStyle('matterType', !!errors.matterType),
                                appearance: 'none',
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23A0784A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 18px center',
                                paddingRight: '45px',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="" disabled>Select a matter type</option>
                            <option value="Corporate Legal Advisory and Governance Counsel">Corporate Legal Advisory and Governance Counsel</option>
                            <option value="Litigation Management and Dispute Resolution">Litigation Management and Dispute Resolution</option>
                            <option value="Intellectual Property Strategy and Patent Prosecution">Intellectual Property Strategy and Patent Prosecution</option>
                            <option value="Regulatory Compliance, Risk Management and Legal Audits">Regulatory Compliance, Risk Management and Legal Audits</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {errors.matterType && <span style={errorStyle}>{errors.matterType}</span>}
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Organisation or Individual</label>
                    <input
                        type="text"
                        value={organisation}
                        onChange={e => setOrganisation(e.target.value)}
                        onFocus={() => setFocusedField('organisation')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Company, institution or your name"
                        style={getFieldStyle('organisation', !!errors.organisation)}
                    />
                    {errors.organisation && <span style={errorStyle}>{errors.organisation}</span>}
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Jurisdiction</label>
                    <input
                        type="text"
                        value={jurisdiction}
                        onChange={e => setJurisdiction(e.target.value)}
                        onFocus={() => setFocusedField('jurisdiction')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Kenya, East Africa, International..."
                        style={getFieldStyle('jurisdiction', !!errors.jurisdiction)}
                    />
                    {errors.jurisdiction && <span style={errorStyle}>{errors.jurisdiction}</span>}
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Describe Your Matter</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value.slice(0, 1000))}
                        onFocus={() => setFocusedField('description')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Summarise your legal matter, the outcome you are seeking and any relevant timeline."
                        rows={5}
                        style={{
                            ...getFieldStyle('description', !!errors.description),
                            minHeight: '140px',
                            resize: 'vertical'
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                        {errors.description
                            ? <span style={errorStyle}>{errors.description}</span>
                            : <span />
                        }
                        <span style={{ color: 'rgba(44,44,42,0.4)', fontSize: '0.75rem', fontFamily: 'var(--font-inter)' }}>
                            {description.length} / 1000
                        </span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="mobile-stack">
                    <div style={fieldGroupStyle}>
                        <label style={labelStyle}>Your Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your full name"
                            style={getFieldStyle('name', !!errors.name)}
                        />
                        {errors.name && <span style={errorStyle}>{errors.name}</span>}
                    </div>

                    <div style={fieldGroupStyle}>
                        <label style={labelStyle}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your professional email"
                            style={getFieldStyle('email', !!errors.email)}
                        />
                        {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>
                </div>

                <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        width: '100%',
                        backgroundColor: isHovered ? '#8E683D' : '#A0784A',
                        color: '#FFFFFF',
                        padding: '16px',
                        borderRadius: '4px',
                        fontWeight: 600,
                        fontSize: '0.92rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-inter)',
                        transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                        marginTop: '1rem',
                        boxShadow: isHovered ? '0 4px 12px rgba(160,120,74,0.25)' : 'none'
                    }}
                >
                    Submit Brief via Email →
                </button>
            </form>

            {submitted && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginTop: '1.5rem',
                        padding: '1.25rem',
                        backgroundColor: 'rgba(160,120,74,0.06)',
                        border: '1px solid rgba(160,120,74,0.15)',
                        borderRadius: '4px'
                    }}
                >
                    <span style={{ color: '#A0784A', fontSize: '1.1rem', flexShrink: 0, fontWeight: 700 }}>✓</span>
                    <p style={{
                        color: 'rgba(44,44,42,0.8)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-inter)',
                        margin: 0
                    }}>
                        Your email client has opened with your brief pre-filled. Send it to complete your submission. Aileen will respond within two working days.
                    </p>
                </motion.div>
            )}

            <style jsx>{`
                @media (max-width: 640px) {
                    .mobile-stack {
                        grid-template-columns: 1fr !important;
                        gap: 0 !important;
                    }
                }
            `}</style>
        </div>
    )
}
