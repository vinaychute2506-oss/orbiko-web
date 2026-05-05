# WordPress Backend Setup for Orbiko Website

To manage the content (Projects, Services, Blog) for the Orbiko Next.js application, you need to set up WordPress as a Headless CMS. Follow these steps:

## 1. Hosting & Installation
1. Install WordPress on your preferred host (Hostinger, Bluehost) or locally using Local WP (`localwp.com`).
2. Complete the initial WordPress setup (Site Name, Admin credentials).

## 2. Essential Plugins
Log into your WordPress admin dashboard, navigate to **Plugins > Add New**, and install & activate the following:
- **Custom Post Type UI (CPT UI)**: To create custom content types.
- **Advanced Custom Fields (ACF)**: To add specific fields to your content.
- **WP REST API / WPGraphQL**: Choose one. The current Next.js `lib/api.ts` file is configured for the REST API. If you prefer GraphQL, install WPGraphQL.

## 3. Creating Custom Post Types
Using **CPT UI**, create the following Post Types:
1. **Projects**:
   - Post Type Slug: `projects`
   - Plural Label: Projects
   - Singular Label: Project
   - Supports: Title, Editor, Featured Image, Excerpt, Custom Fields.
   - Show in REST API: **True** (Important!)

2. **Services**:
   - Post Type Slug: `services`
   - Plural Label: Services
   - Singular Label: Service
   - Supports: Title, Editor, Featured Image, Excerpt.
   - Show in REST API: **True**

## 4. Setting up Custom Fields (ACF)
Using **ACF**, create a Field Group called "Project Details" and attach it to the `Project` post type.
Add these fields:
- **Category** (Text or Select)
- **Location** (Text)
- **Timeline** (Text)
- **Client** (Text)
- **Gallery** (Gallery field) - Note: You may need ACF Pro for the gallery, or use standard WordPress attachments.

Make sure to enable "Show in REST API" in the ACF settings for these fields.

## 5. Permalinks Settings
Go to **Settings > Permalinks** and select "Post name". This ensures your REST API routes are clean.

## 6. Connecting Next.js to WordPress
In your Next.js project root (`C:\Users\Takemichi\.gemini\antigravity\scratch\orbiko-web`), create a `.env.local` file:
```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-domain.com/wp-json
```

Once this is set, the frontend will automatically switch from using mock data to fetching live data from your WordPress installation.

## 7. Adding Content
- Go to **Projects > Add New** in WordPress.
- Add a Title, Content, set a Featured Image.
- Fill out the ACF fields (Category, Location, etc.).
- Publish.
- Reload the Next.js frontend to see the dynamic data.
