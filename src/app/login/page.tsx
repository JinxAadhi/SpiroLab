'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await signIn(email, password)
            toast.success('Welcome back!')
            router.push('/products')
        } catch (error: any) {
            toast.error(error.message || 'Failed to sign in')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8">
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
                    <h1 className="text-2xl md:text-3xl font-bold font-[var(--font-outfit)]">Welcome Back</h1>
                    <p className="text-sm md:text-base text-ocean-light mt-2">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5 md:space-y-6">
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-2.5 md:py-3 text-sm md:text-base bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <p className="text-center text-sm md:text-base text-ocean-light">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-ocean-teal hover:text-ocean-light font-semibold">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    )
}
