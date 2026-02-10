'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import { Product } from '@/types'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [activeFilters, setActiveFilters] = useState({
        shrimpType: 'all',
        farmingStage: 'all',
        problemType: 'all',
    })

    const addItem = useCartStore((state) => state.addItem)

    useEffect(() => {
        fetchProducts()
    }, [activeFilters])

    const fetchProducts = async () => {
        setLoading(true)
        const params = new URLSearchParams()

        if (activeFilters.shrimpType !== 'all') {
            params.append('shrimpType', activeFilters.shrimpType)
        }
        if (activeFilters.farmingStage !== 'all') {
            params.append('farmingStage', activeFilters.farmingStage)
        }
        if (activeFilters.problemType !== 'all') {
            params.append('problemType', activeFilters.problemType)
        }

        try {
            const res = await fetch(`/api/products?${params}`)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            toast.error('Failed to load products')
        } finally {
            setLoading(false)
        }
    }

    const handleAddToCart = (product: Product) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image_url: product.image_url,
            category: product.category,
        })
        toast.success(`${product.name} added to cart!`)
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[var(--font-outfit)]">
                    Our Products
                </h1>
                <p className="text-xl text-center text-ocean-light mb-12">
                    Premium solutions for every stage of shrimp farming
                </p>

                {/* Filters */}
                <div className="glass-card p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Shrimp Type</label>
                            <select
                                value={activeFilters.shrimpType}
                                onChange={(e) => setActiveFilters({ ...activeFilters, shrimpType: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none"
                            >
                                <option value="all">All Types</option>
                                <option value="vannamei">Vannamei</option>
                                <option value="tiger">Tiger Shrimp</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Farming Stage</label>
                            <select
                                value={activeFilters.farmingStage}
                                onChange={(e) => setActiveFilters({ ...activeFilters, farmingStage: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none"
                            >
                                <option value="all">All Stages</option>
                                <option value="pre-stocking">Pre-Stocking</option>
                                <option value="growth">Growth Phase</option>
                                <option value="harvest">Harvest</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Problem Type</label>
                            <select
                                value={activeFilters.problemType}
                                onChange={(e) => setActiveFilters({ ...activeFilters, problemType: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none"
                            >
                                <option value="all">All Problems</option>
                                <option value="disease">Disease Control</option>
                                <option value="water">Water Quality</option>
                                <option value="nutrition">Nutrition</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-12 h-12 border-4 border-ocean-teal border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-ocean-light">No products found. Try adjusting your filters.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {products.map((product) => (
                            <div key={product.id} className="glass-card p-6 hover:scale-105 transition-transform">
                                <div className="aspect-square bg-ocean-blue/30 rounded-lg mb-4 flex items-center justify-center text-6xl">
                                    {product.image_url || '🦐'}
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-[var(--font-outfit)]">{product.name}</h3>
                                <p className="text-ocean-light mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.farming_stage.map((stage) => (
                                        <span key={stage} className="px-3 py-1 bg-ocean-teal/20 rounded-full text-sm">
                                            {stage}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gold">₹{product.price}</span>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="px-6 py-2 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
