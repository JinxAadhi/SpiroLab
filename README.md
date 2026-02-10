# Cauvery Symbiosis - Full-Stack Application

A modern, full-stack e-commerce platform for aquaculture products built with Next.js 14, Supabase, and Tailwind CSS.

## 🌊 Features

- **Beautiful Ocean-Themed UI** - Glassmorphism design with ocean color palette
- **Authentication** - Secure sign up/sign in with Supabase
- **Product Catalog** - Browse products with advanced filtering
- **Shopping Cart** - Full cart management with persistence
- **Admin Dashboard** - Manage products and orders
- **Responsive Design** - Works perfectly on all devices
- **Type-Safe** - Built with TypeScript
- **Real-time Database** - Powered by Supabase PostgreSQL

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📖 Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[fullstack_plan.md](../brain/.../fullstack_plan.md)** - Technical architecture
- **[supabase-schema.sql](./supabase-schema.sql)** - Database schema

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Authentication:** Supabase Auth
- **Type Safety:** TypeScript
- **UI Components:** Custom components with Lucide icons
- **Notifications:** Sonner

## 📦 Project Structure

```
src/
├── app/              # Next.js pages and API routes
├── components/       # Reusable React components
├── lib/             # Utilities and configurations
├── store/           # Zustand state management
└── types/           # TypeScript type definitions
```

## 🔐 Environment Variables

Required variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or follow the deployment guide in [SETUP.md](./SETUP.md)

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines first.

---

**Built with ❤️ for sustainable aquaculture**
