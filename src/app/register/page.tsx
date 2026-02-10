'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'

export default function RegisterPage() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { signUp } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters')
            return
        }

        setLoading(true)

        try {
            await signUp(email, password, fullName)
            toast.success('Account created! Please check your email to verify.')
            router.push('/login')
        } catch (error: any) {
            toast.error(error.message || 'Failed to create account')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8 md:py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-6 md:mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4 md:mb-6">
                        <span className="text-3xl md:text-4xl">🧬</span>
                        <div className="flex flex-col items-start">
                            <span className="text-xl md:text-2xl font-bold font-[var(--font-outfit)]">
                                Spirolab
                            </span>
                            <span className="text-xs md:text-sm text-ocean-light -mt-1">
                                Bioformulations
                            </span>
                        </div>
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold font-[var(--font-outfit)]">Create Account</h1>
                    <p className="text-sm md:text-base text-ocean-light mt-2">Join our aquaculture community</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-2.5 md:py-3 text-sm md:text-base bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating account...' : 'Create Account'}
                    </button>

                    <p className="text-center text-sm md:text-base text-ocean-light">
                        Already have an account?{' '}
                        <Link href="/login" className="text-ocean-teal hover:text-ocean-light font-semibold">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    )
}
