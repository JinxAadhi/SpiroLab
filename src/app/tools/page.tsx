import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function ToolsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-24 md:pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 font-[var(--font-outfit)]">
                    Smart Aquaculture Tools
                </h1>
                <p className="text-lg md:text-xl text-center text-ocean-light mb-12 md:mb-16 max-w-3xl mx-auto">
                    Data-driven tools to optimize your shrimp farming operations
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            icon: '📊',
                            title: 'Pond Calculator',
                            desc: 'Calculate optimal stocking density, feed requirements, and expected yields for your pond size.',
                            status: 'Coming Soon'
                        },
                        {
                            icon: '💧',
                            title: 'Water Quality Monitor',
                            desc: 'Track and analyze water parameters like pH, dissolved oxygen, ammonia, and temperature.',
                            status: 'Coming Soon'
                        },
                        {
                            icon: '🦐',
                            title: 'Growth Tracker',
                            desc: 'Monitor shrimp growth rates, survival rates, and predict harvest timelines.',
                            status: 'Coming Soon'
                        },
                        {
                            icon: '💰',
                            title: 'Profit Calculator',
                            desc: 'Estimate costs, revenues, and profitability for your farming cycle.',
                            status: 'Coming Soon'
                        },
                        {
                            icon: '🌡️',
                            title: 'Disease Predictor',
                            desc: 'AI-powered early warning system for common shrimp diseases based on environmental conditions.',
                            status: 'Coming Soon'
                        },
                        {
                            icon: '📈',
                            title: 'Feed Optimizer',
                            desc: 'Optimize feed conversion ratio (FCR) and reduce feed costs with smart recommendations.',
                            status: 'Coming Soon'
                        }
                    ].map((tool, i) => (
                        <div key={i} className="glass-card p-6 md:p-8 relative overflow-hidden">
                            <div className="text-4xl md:text-5xl mb-4">{tool.icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 font-[var(--font-outfit)]">{tool.title}</h3>
                            <p className="text-sm md:text-base text-ocean-light mb-4">{tool.desc}</p>
                            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-xs md:text-sm font-semibold">
                                {tool.status}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center glass-card p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">
                        Want Early Access?
                    </h2>
                    <p className="text-base md:text-lg text-ocean-light mb-6 md:mb-8 max-w-2xl mx-auto">
                        These smart tools are currently in development. Contact us to get early access and help shape these features.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 md:px-8 py-3 md:py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
                    >
                        Request Early Access
                    </Link>
                </div>
            </div>
        </main>
    )
}
