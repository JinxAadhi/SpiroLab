# Cauvery Symbiosis - Full-Stack Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier is fine)
- Git installed

### Step 1: Set Up Supabase

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose organization and set project name
   - Set a strong database password
   - Select region closest to you
   - Wait for project to be created (~2 minutes)

2. **Run Database Schema**
   - In your Supabase project, go to SQL Editor
   - Click "New Query"
   - Copy the entire contents of `supabase-schema.sql`
   - Paste and click "Run"
   - You should see "Success. No rows returned"

3. **Get API Keys**
   - Go to Project Settings → API
   - Copy `Project URL` and `anon public` key
   - You'll need these for the next step

### Step 2: Configure Environment Variables

1. **Create `.env.local` file** in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Supabase credentials:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

### Step 3: Install Dependencies & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

---

## 📦 What's Included

### Core Features
- ✅ **Authentication** - Sign up, sign in, sign out
- ✅ **Product Catalog** - Browse products with advanced filtering
- ✅ **Shopping Cart** - Add/remove items, update quantities
- ✅ **Product Management API** - RESTful endpoints for CRUD operations
- ✅ **Admin Dashboard** - Manage products (requires admin role)
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Ocean Theme** - Beautiful glassmorphism UI

### Pages
- `/` - Home page with hero and highlights
- `/products` - Product catalog with filtering
- `/cart` - Shopping cart
- `/login` - Sign in page
- `/register` - Sign up page
- `/admin/products` - Admin product management (coming soon)

### API Routes
- `GET /api/products` - List products (with filtering)
- `POST /api/products` - Create product (admin only)
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product (admin only)
- `DELETE /api/products/[id]` - Delete product (admin only)

---

## 🔐 Creating an Admin User

By default, new users have the `customer` role. To create an admin:

1. **Register a new account** through the app
2. **Go to Supabase Dashboard** → Authentication → Users
3. **Find your user** and click on it
4. **Go to SQL Editor** and run:
   ```sql
   UPDATE public.users 
   SET role = 'admin' 
   WHERE email = 'your-email@example.com';
   ```

Now you can access admin features!

---

## 🛒 Phase 3: Adding E-commerce (Razorpay)

### Step 1: Get Razorpay Credentials

1. Sign up at [razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys
3. Generate Test/Live keys
4. Add to `.env.local`:
   ```env
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=your_secret_key
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx
   ```

### Step 2: Install Razorpay

```bash
npm install razorpay
```

### Step 3: Create Checkout Page

The checkout functionality is ready to be implemented. See `fullstack_plan.md` for detailed code examples.

---

## 📊 Database Structure

### Tables Created
- `users` - User profiles (extends Supabase auth)
- `products` - Product catalog
- `orders` - Customer orders
- `order_items` - Items in each order
- `reviews` - Product reviews
- `blog_posts` - Knowledge Hub articles

### Sample Data
The schema includes 6 sample products to get you started!

---

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to change the ocean color palette:
```css
:root {
  --ocean-deep: #0a1628;  /* Change these */
  --ocean-teal: #4fb3bf;
  --gold: #d4af37;
}
```

### Fonts
Update `src/app/layout.tsx` to change fonts:
```typescript
import { YourFont } from "next/font/google";
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cauvery-symbiosis.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

---

## 📝 Next Steps

### Immediate
1. ✅ Set up Supabase
2. ✅ Configure environment variables
3. ✅ Run the app locally
4. ✅ Create an admin user
5. ✅ Add your own products

### Short Term (1-2 weeks)
- [ ] Build admin dashboard UI
- [ ] Add product image uploads (Cloudinary)
- [ ] Implement checkout flow
- [ ] Add order management

### Medium Term (1-2 months)
- [ ] Integrate Razorpay payments
- [ ] Add email notifications
- [ ] Build Knowledge Hub CMS
- [ ] Add product reviews

### Long Term (3-6 months)
- [ ] WhatsApp notifications (Twilio)
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 🆘 Troubleshooting

### "Failed to fetch products"
- Check Supabase URL and keys in `.env.local`
- Verify database schema was run successfully
- Check browser console for errors

### "Unauthorized" errors
- Make sure you're signed in
- Check user role in Supabase dashboard
- Verify RLS policies are enabled

### Styling issues
- Clear browser cache
- Run `npm run dev` again
- Check for CSS conflicts

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand State Management](https://github.com/pmndrs/zustand)

---

## 🎯 Project Structure

```
cauvery-fullstack/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   ├── login/             # Auth pages
│   │   ├── products/          # Product pages
│   │   └── cart/              # Cart page
│   ├── components/            # React components
│   ├── lib/                   # Utilities
│   │   ├── supabase/         # Supabase client
│   │   └── auth/             # Auth context
│   ├── store/                 # Zustand stores
│   └── types/                 # TypeScript types
├── public/                    # Static assets
├── supabase-schema.sql       # Database schema
└── .env.example              # Environment template
```

---

**🌊 Happy Building! Where Science Meets Symbiosis**
