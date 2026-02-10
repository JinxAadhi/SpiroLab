'use client'

import Link from 'next/link'

import { ShoppingCart, User, Menu } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState } from 'react'

import Image from 'next/image'

export default function Navbar() {
    const { items, itemCount } = useCartStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-2 md:mx-4 mt-2 md:mt-4 px-3 md:px-6 py-3 md:py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/logo.png"
                            alt="Spirolab Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base md:text-xl font-bold font-[var(--font-outfit)]">
                            Spirolab
                        </span>
                        <span className="text-[9px] md:text-xs text-ocean-light -mt-0.5 md:-mt-1">
                            Bioformulations
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-4 xl:gap-8 font-[var(--font-outfit)]">
                    <Link href="/" className="text-sm xl:text-base hover:text-ocean-teal transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm xl:text-base hover:text-ocean-teal transition-colors">
                        About
                    </Link>
                    <Link href="/products" className="text-sm xl:text-base hover:text-ocean-teal transition-colors">
                        Products
                    </Link>
                    <Link href="/tools" className="text-sm xl:text-base hover:text-ocean-teal transition-colors">
                        Smart Tools
                    </Link>
                    <Link href="/knowledge" className="text-sm xl:text-base hover:text-ocean-teal transition-colors">
                        Knowledge Hub
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm xl:text-base text-gold hover:text-gold-light transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <Link href="/cart" className="relative hover:text-ocean-teal transition-colors">
                        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 bg-gold text-ocean-deep text-[10px] md:text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-bold">
                            {mounted ? itemCount() : 0}
                        </span>
                    </Link>
                    <Link href="/login" className="hover:text-ocean-teal transition-colors">
                        <User className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>
                    <button className="lg:hidden">
                        <Menu className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
