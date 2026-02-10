import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-24 md:pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 font-[var(--font-outfit)]">
                    About Spirolab Bioformulations
                </h1>
                <p className="text-lg md:text-xl text-center text-ocean-light mb-12 md:mb-16 max-w-3xl mx-auto">
                    Leading the future of sustainable aquaculture through innovative bioformulations
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                    <div className="glass-card p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">Our Mission</h2>
                        <p className="text-ocean-light leading-relaxed">
                            At Spirolab Bioformulations, we are committed to revolutionizing shrimp farming through scientifically-backed,
                            eco-friendly bioformulations. Our mission is to empower farmers with cutting-edge solutions that enhance
                            productivity while maintaining environmental sustainability.
                        </p>
                    </div>

                    <div className="glass-card p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">Our Vision</h2>
                        <p className="text-ocean-light leading-relaxed">
                            To become India's most trusted partner in aquaculture innovation, setting new standards for sustainable
                            shrimp farming practices and contributing to the growth of the aquaculture industry through research-driven
                            bioformulations.
                        </p>
                    </div>
                </div>

                <div className="glass-card p-6 md:p-10 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-[var(--font-outfit)]">
                        Why Choose Spirolab?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: '🔬',
                                title: 'Scientific Excellence',
                                desc: 'All our bioformulations are developed through rigorous research and testing in collaboration with aquaculture experts.'
                            },
                            {
                                icon: '🌱',
                                title: 'Sustainable Practices',
                                desc: 'We prioritize eco-friendly solutions that promote long-term sustainability in shrimp farming operations.'
                            },
                            {
                                icon: '🤝',
                                title: 'Farmer Support',
                                desc: 'Dedicated technical support and consultation services to help farmers maximize their yields and profitability.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 font-[var(--font-outfit)]">{item.title}</h3>
                                <p className="text-sm md:text-base text-ocean-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center glass-card p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-outfit)]">
                        Ready to Partner With Us?
                    </h2>
                    <p className="text-base md:text-lg text-ocean-light mb-6 md:mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful shrimp farmers who trust Spirolab Bioformulations for their aquaculture needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                        <Link
                            href="/products"
                            className="px-6 md:px-8 py-3 md:py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 md:px-8 py-3 md:py-4 bg-gold hover:bg-gold-light text-ocean-deep rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
