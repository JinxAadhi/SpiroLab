'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { Eye, EyeOff, Loader2, Check, X } from 'lucide-react'

export default function RegisterPage() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const { signUp, signIn } = useAuth()
    const router = useRouter()

    const passwordStrength = {
        hasLength: password.length >= 6,
        hasMatch: password === confirmPassword && password.length > 0,
    }

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
            // Auto-login after signup
            await signIn(email, password)
            toast.success('Welcome to Spirolab!')
            router.push('/products')
        } catch (error: any) {
            toast.error(error.message || 'Failed to create account')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8 md:py-12 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-aqua/10 via-transparent to-ocean-teal/10 pointer-events-none" />
            
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
                    <h1 className="text-3xl font-bold font-[var(--font-outfit)] mb-2">Create Account</h1>
                    <p className="text-base text-ocean-light">Join our aquaculture community</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 animate-slide-up">
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-ocean-light">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-ocean-blue/30 border border-ocean-mid/50 focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/20 outline-none transition-all placeholder:text-ocean-light/50"
                            placeholder="John Doe"
                        />
                    </div>

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
                        {password && (
                            <div className="flex items-center gap-2 text-xs mt-2">
                                <div className={`flex items-center gap-1 ${passwordStrength.hasLength ? 'text-green-400' : 'text-ocean-light/50'}`}>
                                    {passwordStrength.hasLength ? <Check size={14} /> : <X size={14} />}
                                    <span>At least 6 characters</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-ocean-light">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 pr-12 rounded-xl bg-ocean-blue/30 border border-ocean-mid/50 focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/20 outline-none transition-all placeholder:text-ocean-light/50"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-light hover:text-ocean-teal transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {confirmPassword && (
                            <div className="flex items-center gap-2 text-xs mt-2">
                                <div className={`flex items-center gap-1 ${passwordStrength.hasMatch ? 'text-green-400' : 'text-ocean-light/50'}`}>
                                    {passwordStrength.hasMatch ? <Check size={14} /> : <X size={14} />}
                                    <span>Passwords match</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gradient-to-r from-ocean-teal to-ocean-aqua hover:from-ocean-aqua hover:to-ocean-teal rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ocean-teal/20 hover:shadow-xl hover:shadow-ocean-teal/30 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Creating account...
                            </>
                        ) : (
                            'Create Account'
                        )}
                    </button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-ocean-mid/30"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-ocean-deep text-ocean-light">Already have an account?</span>
                        </div>
                    </div>

                    <Link 
                        href="/login" 
                        className="block w-full px-6 py-3 text-center border-2 border-ocean-teal/50 hover:border-ocean-teal rounded-full font-semibold transition-all hover:bg-ocean-teal/10"
                    >
                        Sign In
                    </Link>
                </form>
            </div>
        </main>
    )
}
