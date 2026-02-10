'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
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
        <main className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-teal/10 via-transparent to-ocean-aqua/10 pointer-events-none" />
            
            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8 animate-fade-in">
                    <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                        <span className="text-4xl transition-transform group-hover:scale-110">🧬</span>
                        <div className="flex flex-col items-start">
                            <span className="text-2xl font-bold font-[var(--font-outfit)] bg-gradient-to-r from-ocean-teal to-ocean-aqua bg-clip-text text-transparent">
                                Spirolab
                            </span>
                            <span className="text-sm text-ocean-light -mt-1">
                                Bioformulations
                            </span>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold font-[var(--font-outfit)] mb-2">Welcome Back</h1>
                    <p className="text-base text-ocean-light">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 animate-slide-up">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-ocean-light">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-ocean-blue/30 border border-ocean-mid/50 focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/20 outline-none transition-all placeholder:text-ocean-light/50"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-ocean-light">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 pr-12 rounded-xl bg-ocean-blue/30 border border-ocean-mid/50 focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/20 outline-none transition-all placeholder:text-ocean-light/50"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-light hover:text-ocean-teal transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gradient-to-r from-ocean-teal to-ocean-aqua hover:from-ocean-aqua hover:to-ocean-teal rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ocean-teal/20 hover:shadow-xl hover:shadow-ocean-teal/30 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-ocean-mid/30"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-ocean-deep text-ocean-light">New to Spirolab?</span>
                        </div>
                    </div>

                    <Link 
                        href="/register" 
                        className="block w-full px-6 py-3 text-center border-2 border-ocean-teal/50 hover:border-ocean-teal rounded-full font-semibold transition-all hover:bg-ocean-teal/10"
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </main>
    )
}
