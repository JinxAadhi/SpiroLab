'use client'

import { useCartStore } from '@/store/cart-store'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'

export default function CartPage() {
    const { items, removeItem, updateQuantity, total, clearCart } = useCartStore()

    if (items.length === 0) {
        return (
            <main className="min-h-screen">
                <Navbar />
                <div className="pt-32 px-4 max-w-4xl mx-auto text-center">
                    <div className="glass-card p-12">
                        <div className="text-6xl mb-4">🛒</div>
                        <h1 className="text-3xl font-bold mb-4 font-[var(--font-outfit)]">Your Cart is Empty</h1>
                        <p className="text-ocean-light mb-8">Add some products to get started!</p>
                        <Link
                            href="/products"
                            className="inline-block px-8 py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all"
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 px-4 max-w-6xl mx-auto mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[var(--font-outfit)]">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="glass-card p-6">
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-ocean-blue/30 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                                        {item.image_url || '🦐'}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1 font-[var(--font-outfit)]">{item.name}</h3>
                                        <p className="text-ocean-light text-sm mb-2">{item.category}</p>
                                        <p className="text-gold font-bold">₹{item.price}</p>
                                    </div>

                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-full bg-ocean-blue/50 hover:bg-ocean-mid flex items-center justify-center"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-bold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full bg-ocean-blue/50 hover:bg-ocean-mid flex items-center justify-center"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={clearCart}
                            className="text-red-400 hover:text-red-300 transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 sticky top-24">
                            <h2 className="text-2xl font-bold mb-6 font-[var(--font-outfit)]">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-ocean-light">Subtotal</span>
                                    <span className="font-semibold">₹{total().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-ocean-light">Shipping</span>
                                    <span className="font-semibold">Free</span>
                                </div>
                                <div className="border-t border-ocean-mid pt-3 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-gold">₹{total().toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="block w-full px-6 py-4 bg-gold hover:bg-gold-light text-ocean-deep text-center rounded-full font-bold transition-all hover:scale-105"
                            >
                                Proceed to Checkout
                            </Link>

                            <Link
                                href="/products"
                                className="block w-full px-6 py-3 text-center text-ocean-teal hover:text-ocean-light transition-colors mt-4"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
