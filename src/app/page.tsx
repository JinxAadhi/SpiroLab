import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 px-4">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-aqua/20 to-ocean-teal/20" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Small subtle particles */}
          <div className="particle w-1 h-1 left-[10%] animation-duration-15s animation-delay-0"></div>
          <div className="particle w-1.5 h-1.5 left-[30%] animation-duration-25s animation-delay-2000"></div>
          <div className="particle w-1 h-1 left-[50%] animation-duration-18s animation-delay-5000"></div>
          <div className="particle w-2 h-2 left-[70%] animation-duration-20s animation-delay-1000"></div>
          <div className="particle w-1 h-1 left-[90%] animation-duration-22s animation-delay-3000"></div>

          {/* Couple more scattered ones */}
          <div className="particle w-1 h-1 left-[20%] animation-duration-28s animation-delay-7000"></div>
          <div className="particle w-1.5 h-1.5 left-[60%] animation-duration-24s animation-delay-4000"></div>
          <div className="particle w-1 h-1 left-[80%] animation-duration-19s animation-delay-6000"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 font-[var(--font-outfit)]">
            <span className="block">Sustainable Shrimp Farming</span>
            <span className="block gradient-text">Through Smart Aquaculture</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-ocean-light px-4">
            Premium bioformulations for modern aquaculture - where science meets sustainability
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link
              href="/products"
              className="px-6 md:px-8 py-3 md:py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-ocean-teal/50 text-sm md:text-base"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 glass-card hover:border-gold rounded-full font-semibold transition-all text-sm md:text-base"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="text-xs md:text-sm text-ocean-light">Scroll to explore</div>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-ocean-light rounded-full mx-auto mt-2 flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-ocean-light rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '🛡️', title: 'Disease Prevention', desc: 'Advanced probiotics and immunity boosters for healthy shrimp populations' },
              { icon: '💧', title: 'Water Quality Solutions', desc: 'Scientific water treatment for optimal aquatic environments' },
              { icon: '📈', title: 'Growth Optimization', desc: 'Premium feed supplements for maximum growth and FCR efficiency' },
              { icon: '🌱', title: 'Sustainable Solutions', desc: 'Eco-friendly biofloc and organic farming bioformulations' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 md:p-6 floating-element" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 font-[var(--font-outfit)]">{item.title}</h3>
                <p className="text-sm md:text-base text-ocean-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spirolab */}
      <section className="py-12 md:py-20 px-4 bg-ocean-blue/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 font-[var(--font-outfit)]">
            Why Spirolab Bioformulations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '⭐', title: 'Expert Experience', desc: 'Years of hands-on aquaculture expertise serving farmers across India' },
              { icon: '🔬', title: 'Scientifically Tested', desc: 'All products undergo rigorous testing for efficacy and safety' },
              { icon: '🤝', title: 'Farmer-First Approach', desc: 'Dedicated support and consultation for every farming challenge' },
            ].map((item, i) => (
              <div key={i} className="text-center fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 gold-glow inline-block">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 font-[var(--font-outfit)]">{item.title}</h3>
                <p className="text-sm md:text-base text-ocean-light px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 font-[var(--font-outfit)]">
            Ready to Transform Your Aquaculture Business?
          </h2>
          <p className="text-base md:text-xl text-ocean-light mb-6 md:mb-8 px-4">
            Get expert guidance and premium bioformulations for sustainable shrimp farming
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/products"
              className="px-6 md:px-8 py-3 md:py-4 bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-gold hover:bg-gold-light text-ocean-deep rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep/50 py-8 md:py-12 px-4 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-[var(--font-outfit)]">Spirolab Bioformulations</h3>
            <p className="text-sm md:text-base text-ocean-light">Sustainable Shrimp Farming Through Smart Aquaculture</p>
            <p className="text-gold mt-2 text-sm md:text-base">🧬 Where Science Meets Sustainability</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <Link href="/" className="text-ocean-light hover:text-ocean-teal">Home</Link>
              <Link href="/about" className="text-ocean-light hover:text-ocean-teal">About Us</Link>
              <Link href="/products" className="text-ocean-light hover:text-ocean-teal">Products</Link>
              <Link href="/tools" className="text-ocean-light hover:text-ocean-teal">Smart Tools</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Resources</h4>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <Link href="/knowledge" className="text-ocean-light hover:text-ocean-teal">Knowledge Hub</Link>
              <Link href="/contact" className="text-ocean-light hover:text-ocean-teal">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Connect With Us</h4>
            <p className="text-sm md:text-base text-ocean-light mb-3 md:mb-4">Stay updated with the latest in aquaculture</p>
            <div className="flex gap-4">
              <a href="#" className="text-xl md:text-2xl hover:scale-110 transition-transform">📘</a>
              <a href="#" className="text-xl md:text-2xl hover:scale-110 transition-transform">📷</a>
              <a href="#" className="text-xl md:text-2xl hover:scale-110 transition-transform">💼</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 md:mt-8 pt-6 md:pt-8 border-t border-ocean-mid text-center text-ocean-light text-xs md:text-base">
          <p>&copy; 2026 Spirolab Bioformulations. All rights reserved. | Scientifically Tested Products ✓</p>
        </div>
      </footer>
    </main>
  )
}
