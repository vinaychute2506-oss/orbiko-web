# 🏗️ ORBIKO — Premium Architecture & Interior Design Website
## Complete Setup Instructions

---

## 📦 WHAT'S INCLUDED

This project is a **Headless WordPress + Next.js** architecture portfolio website.

- **Frontend**: Next.js 16 (App Router), Tailwind CSS v4, Framer Motion
- **Backend**: WordPress (Local WP) + WPGraphQL + ACF (Free)
- **Design**: Dark luxury theme inspired by premium interior design brands

---

## 🖥️ PREREQUISITES (Install These First)

| Tool | Version | Download |
|---|---|---|
| Node.js | v18 or higher | https://nodejs.org |
| Local WP | Latest | https://localwp.com |
| WordPress Plugins | WPGraphQL + ACF | (see Step 2) |

---

## 🚀 STEP 1 — SET UP LOCAL WP (WordPress Backend)

1. Download and install **Local WP**: https://localwp.com
2. Click **"+ Create a new site"**
3. Enter site name: `orbiko`
4. Choose **"Preferred"** setup
5. Click **"Add Site"** — wait for it to start
6. Your site will be at: `http://orbiko.local`

---

## 🔌 STEP 2 — INSTALL WORDPRESS PLUGINS

Open your Local WP site → click **"Open Site"** → go to `/wp-admin`

Default credentials: **admin / admin** (or whatever you set during setup)

### Install these 2 plugins:

#### A) WPGraphQL
1. Go to **Plugins → Add New**
2. Search for `WPGraphQL`
3. Install & Activate

#### B) Advanced Custom Fields (ACF)
1. Go to **Plugins → Add New**
2. Search for `Advanced Custom Fields`
3. Install & Activate (use the FREE version)

---

## 📋 STEP 3 — CREATE CUSTOM POST TYPE (Projects)

1. In WP Admin → go to **Plugins → Add New**
2. Search for **"Custom Post Type UI"** → Install & Activate
3. Go to **CPT UI → Add/Edit Post Types**
4. Create new post type:
   - **Post Type Slug**: `project`
   - **Plural Label**: `Projects`
   - **Singular Label**: `Project`
5. Scroll down to **"Settings"** → set **"Show in GraphQL"** = `True`
6. **GraphQL Single Name**: `project`
7. **GraphQL Plural Name**: `projects`
8. Click **"Add Post Type"**

---

## 🗃️ STEP 4 — SET UP ACF FIELD GROUP

1. Go to **ACF → Field Groups → Add New**
2. Name it: `Project Fields`
3. Add these fields one by one:

| Field Label | Field Name | Field Type |
|---|---|---|
| Location | location | Text |
| Description | description | Textarea |
| Completion Date | completion_date | Date Picker |
| Image 1 | image_1 | Image (return: Image Array) |
| Image 2 | image_2 | Image (return: Image Array) |
| Image 3 | image_3 | Image (return: Image Array) |
| Image 4 | image_4 | Image (return: Image Array) |

4. Scroll down to **"Location Rules"** → set:
   - **Post Type** is equal to **Project**
5. Scroll down to **"Settings"** panel → enable **"Show in GraphQL"** = `Yes`
6. **GraphQL Field Name**: `projectFields`
7. Click **"Publish"**

---

## ✏️ STEP 5 — ADD YOUR FIRST PROJECT

1. Go to **Projects → Add New**
2. Enter a **Title** (e.g. "Modern Villa")
3. Fill in the ACF fields:
   - Location: Pune
   - Description: Luxury villa project with modern aesthetics
   - Completion Date: (pick any date)
   - Image 1–4: Upload your architecture photos
4. Click **"Publish"**
5. Make note of the **slug** (shown in the URL, e.g. `modern-villa`)

---

## ⚙️ STEP 6 — VERIFY GRAPHQL IS WORKING

In your browser, go to:
```
http://orbiko.local/graphql
```

You should see:
```json
{"errors":[{"message":"GraphQL Request must include at least one of those two parameters..."}]}
```
✅ This is **GOOD** — GraphQL is working!

---

## 💻 STEP 7 — SET UP THE NEXT.JS FRONTEND

### 1. Open a terminal and go to the project folder:
```bash
cd path/to/orbiko-web
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Check your `.env.local` file:

The file already exists. Open it and make sure it contains:
```
NEXT_PUBLIC_WP_API_URL=http://orbiko.local/graphql
```

> ⚠️ **IMPORTANT**: If `orbiko.local` doesn't resolve, add this to your Windows hosts file:
> 
> File: `C:\Windows\System32\drivers\etc\hosts`
> ```
> 127.0.0.1 orbiko.local
> ::1 orbiko.local
> ```
> (Open Notepad as Administrator to edit this file)

### 4. Start the development server:
```bash
npm run dev
```

### 5. Open your browser and go to:
```
http://localhost:3000
```

---

## 🌐 STEP 8 — TEST YOUR SITE

| Page | URL | What to Check |
|---|---|---|
| Homepage | http://localhost:3000 | Dark hero slider, about section, project grid |
| Projects | http://localhost:3000/projects | Your WordPress projects listed |
| Project Detail | http://localhost:3000/projects/modern-villa | Hero image, description, image gallery |

---

## 🔧 TROUBLESHOOTING

### ❌ "Failed to fetch API"
- Make sure Local WP is running
- Make sure WPGraphQL plugin is active
- Check that `NEXT_PUBLIC_WP_API_URL=http://orbiko.local/graphql` in `.env.local`

### ❌ Images not showing (400 error)
- This is already fixed in `next.config.ts` with `unoptimized: true`
- If still broken, check `orbiko.local` is in your hosts file

### ❌ "No projects found"
- Make sure you published a project in WordPress
- Make sure ACF "Show in GraphQL" is enabled on the field group
- Make sure CPT "Show in GraphQL" is enabled on the post type

### ❌ Port 3000 already in use
```bash
# Kill the process on port 3000:
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
# Then restart:
npm run dev
```

---

## 📁 PROJECT STRUCTURE

```
orbiko-web/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── globals.css           # Global styles + color tokens
│   ├── projects/
│   │   ├── page.tsx          # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual project page
│   ├── about/
│   ├── services/
│   ├── blog/
│   └── contact/
├── components/
│   ├── Navbar.tsx            # Top navigation
│   ├── Footer.tsx            # Footer
│   ├── HeroSection.tsx       # Auto-sliding hero carousel
│   ├── ProjectCard.tsx       # Card on projects list page
│   └── project/
│       └── Gallery.tsx       # Image gallery + lightbox
├── lib/
│   └── api.ts                # All GraphQL queries
├── .env.local                # Environment variables (WP API URL)
└── next.config.ts            # Next.js config (image domains)
```

---

## 🎨 DESIGN SYSTEM

| Token | Value | Usage |
|---|---|---|
| `--background` | `#1a1c1e` | Page background |
| `--foreground` | `#f0ede8` | Main text |
| `--accent` | `#c8993a` | Gold highlights, CTA buttons |
| `--muted` | `#8a8784` | Secondary text |
| Font (Heading) | Outfit | Titles and headings |
| Font (Body) | Inter | Paragraphs and UI text |

---

## 🚀 DEPLOY TO VERCEL (Optional)

1. Push project to GitHub
2. Go to https://vercel.com → New Project → Import from GitHub
3. Add Environment Variable:
   - Key: `NEXT_PUBLIC_WP_API_URL`
   - Value: `https://your-live-wordpress-domain.com/graphql`
4. Deploy!

> ⚠️ For production, your WordPress must be on a live server (not Local WP)

---

## 📞 SUPPORT

Built with:
- **Next.js** — https://nextjs.org/docs
- **WPGraphQL** — https://www.wpgraphql.com/docs
- **ACF** — https://www.advancedcustomfields.com/resources
- **Framer Motion** — https://www.framer.com/motion
- **Tailwind CSS** — https://tailwindcss.com/docs

---

*Orbiko Website — Premium Architecture Portfolio*
