# Orbiko - Premium Architecture & Interior Design Website

This is a Next.js 15 project styled with Tailwind CSS 4, utilizing Framer Motion for smooth animations and Lucide React for iconography.

## Folder Structure

```
orbiko-web/
├── app/                  # Next.js App Router
│   ├── about/            # About Page
│   ├── blog/             # Blog Listing Page
│   ├── contact/          # Contact Form Page
│   ├── portfolio/        # Portfolio Grid & Dynamic Project Details
│   ├── services/         # Services Overview
│   ├── globals.css       # Tailwind 4 configuration & global styles
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   └── page.tsx          # Home Page
├── components/           # Reusable UI Components
│   ├── ui/               # Base level UI (Buttons, Containers)
│   ├── HeroSection.tsx   # Home page hero
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Global footer
│   ├── ProjectCard.tsx   # Card for portfolio items
│   └── ServiceCard.tsx   # Card for services
├── lib/                  # Utilities
│   └── api.ts            # Data fetching logic for Headless WP
├── public/               # Static assets
└── WORDPRESS_SETUP.md    # Guide to configuring the backend CMS
```

## Running Locally

1. Open a terminal in the `orbiko-web` directory.
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

Vercel is the recommended platform for deploying Next.js applications.

1. Create a GitHub repository and push this code.
2. Sign up / Log in to [Vercel](https://vercel.com).
3. Click **Add New...** > **Project**.
4. Import your GitHub repository.
5. In the configuration settings, add your Environment Variables:
   - `NEXT_PUBLIC_WORDPRESS_API_URL`: Your WordPress REST API URL.
6. Click **Deploy**.

## Backend Integration
See `WORDPRESS_SETUP.md` for instructions on setting up WordPress as a Headless CMS to feed data into this application. By default, the application uses mock data if no WordPress URL is provided in the `.env` file.
