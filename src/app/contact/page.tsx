'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import { toast } from 'sonner'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent! We\'ll get back to you soon.')
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            setLoading(false)
        }, 1000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-24 md:pt-32 px-4 max-w-7xl mx-auto pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 font-[var(--font-outfit)]">
                    Contact Us
                </h1>
                <p className="text-lg md:text-xl text-center text-ocean-light mb-12 md:mb-16 max-w-3xl mx-auto">
                    Get in touch with our aquaculture experts for personalized support
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <div className="glass-card p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-[var(--font-outfit)]">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                                    placeholder="Vikram Singh"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                                    placeholder="vikram.singh@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                                    placeholder="+91 91234 56789"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="product">Product Inquiry</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="consultation">Farming Consultation</option>
                                    <option value="partnership">Business Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-ocean-blue/50 border border-ocean-mid focus:border-ocean-teal outline-none transition-colors resize-none"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 md:py-4 text-sm md:text-base bg-ocean-teal hover:bg-ocean-aqua rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="glass-card p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-[var(--font-outfit)]">Get in Touch</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl md:text-3xl">📍</span>
                                    <div>
                                        <h3 className="font-bold mb-1 text-sm md:text-base">Address</h3>
                                        <p className="text-sm md:text-base text-ocean-light">
                                            Spirolab Bioformulation<br />
                                            Keezhasuriyamoolai,<br />
                                            Thiruvidaimarudhur, Kumbakanom,<br />
                                            Thanjavur, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-2xl md:text-3xl">📧</span>
                                    <div>
                                        <h3 className="font-bold mb-1 text-sm md:text-base">Email</h3>
                                        <p className="text-sm md:text-base text-ocean-light break-all">spirolabbioformulation@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-2xl md:text-3xl">📞</span>
                                    <div>
                                        <h3 className="font-bold mb-1 text-sm md:text-base">Phone</h3>
                                        <p className="text-sm md:text-base text-ocean-light">+91 91598 85108</p>
                                        <p className="text-sm md:text-base text-ocean-light">+91 87548 89828</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-2xl md:text-3xl">🕐</span>
                                    <div>
                                        <h3 className="font-bold mb-1 text-sm md:text-base">Business Hours</h3>
                                        <p className="text-sm md:text-base text-ocean-light">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-sm md:text-base text-ocean-light">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 font-[var(--font-outfit)]">Connect With Us</h3>
                            <p className="text-sm md:text-base text-ocean-light mb-4">
                                Follow us on social media for updates, tips, and aquaculture insights
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-3xl md:text-4xl hover:scale-110 transition-transform">📘</a>
                                <a href="#" className="text-3xl md:text-4xl hover:scale-110 transition-transform">📷</a>
                                <a href="#" className="text-3xl md:text-4xl hover:scale-110 transition-transform">💼</a>
                                <a href="#" className="text-3xl md:text-4xl hover:scale-110 transition-transform">🐦</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
