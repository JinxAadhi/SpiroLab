import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function KnowledgePage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-24 md:pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 font-[var(--font-outfit)]">
                    Knowledge Hub
                </h1>
                <p className="text-lg md:text-xl text-center text-ocean-light mb-12 md:mb-16 max-w-3xl mx-auto">
                    Learn best practices and stay updated with the latest in shrimp farming
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {[
                        {
                            category: 'Disease Management',
                            icon: '🛡️',
                            articles: [
                                'Early Detection of White Spot Syndrome',
                                'Preventing Vibrio Infections',
                                'Biosecurity Best Practices'
                            ]
                        },
                        {
                            category: 'Water Quality',
                            icon: '💧',
                            articles: [
                                'Maintaining Optimal pH Levels',
                                'Managing Dissolved Oxygen',
                                'Ammonia Control Techniques'
                            ]
                        },
                        {
                            category: 'Nutrition & Growth',
                            icon: '📈',
                            articles: [
                                'Optimizing Feed Conversion Ratio',
                                'Probiotic Supplementation Guide',
                                'Growth Stage Nutrition'
                            ]
                        },
                        {
                            category: 'Pond Management',
                            icon: '🌊',
                            articles: [
                                'Biofloc Technology Basics',
                                'Pond Preparation Checklist',
                                'Stocking Density Guidelines'
                            ]
                        },
                        {
                            category: 'Sustainable Practices',
                            icon: '🌱',
                            articles: [
                                'Eco-Friendly Farming Methods',
                                'Water Recycling Systems',
                                'Organic Certification Process'
                            ]
                        },
                        {
                            category: 'Business & Economics',
                            icon: '💰',
                            articles: [
                                'Cost-Benefit Analysis',
                                'Market Trends & Pricing',
                                'Export Opportunities'
                            ]
                        }
                    ].map((section, i) => (
                        <div key={i} className="glass-card p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl md:text-4xl">{section.icon}</span>
                                <h3 className="text-lg md:text-xl font-bold font-[var(--font-outfit)]">{section.category}</h3>
                            </div>
                            <ul className="space-y-2 md:space-y-3">
                                {section.articles.map((article, j) => (
                                    <li key={j} className="text-sm md:text-base text-ocean-light hover:text-ocean-teal transition-colors cursor-pointer">
                                        → {article}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-4 border-t border-ocean-mid">
                                <span className="text-xs md:text-sm text-gold">Coming Soon</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="glass-card p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">📚 Farming Guides</h2>
                        <p className="text-sm md:text-base text-ocean-light mb-4">
                            Comprehensive step-by-step guides for every stage of shrimp farming, from pond preparation to harvest.
                        </p>
                        <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-xs md:text-sm font-semibold">
                            Coming Soon
                        </span>
                    </div>

                    <div className="glass-card p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">🎥 Video Tutorials</h2>
                        <p className="text-sm md:text-base text-ocean-light mb-4">
                            Watch expert demonstrations and learn practical techniques through our video library.
                        </p>
                        <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-xs md:text-sm font-semibold">
                            Coming Soon
                        </span>
                    </div>
                </div>

                <div className="text-center glass-card p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">
                        Need Expert Advice?
                    </h2>
                    <p className="text-base md:text-lg text-ocean-light mb-6 md:mb-8 max-w-2xl mx-auto">
                        Our aquaculture experts are here to help you with personalized consultation and support.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 md:px-8 py-3 md:py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
                    >
                        Contact Our Experts
                    </Link>
                </div>
            </div>
        </main>
    )
}
