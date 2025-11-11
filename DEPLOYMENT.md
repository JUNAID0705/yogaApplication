# 🚀 Deployment Guide

## Deploy Your Yoga Studio App to Production

### Prerequisites
- Completed Supabase database setup
- Tested app locally with `npm run dev`
- Git repository (optional but recommended)

---

## Option 1: Deploy to Netlify

### Step 1: Build the App
```bash
npm run build
```

### Step 2: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Step 3: Configure Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or higher

### Step 4: Update Supabase Redirect URLs
In Supabase Dashboard → Authentication → URL Configuration:
- Add your Netlify URL (e.g., `https://your-app.netlify.app`)

---

## Option 2: Deploy to Vercel

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Configure Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 4: Update Supabase Redirect URLs
In Supabase Dashboard → Authentication → URL Configuration:
- Add your Vercel URL (e.g., `https://your-app.vercel.app`)

---

## Option 3: Deploy to GitHub Pages

### Step 1: Update `vite.config.js`
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Scripts to `package.json`
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Configure GitHub Pages
- Go to your repo → Settings → Pages
- Source: `gh-pages` branch

---

## Option 4: Deploy to Custom Server

### Step 1: Build the App
```bash
npm run build
```

### Step 2: Upload `dist` Folder
Upload the contents of the `dist` folder to your web server.

### Step 3: Configure Server
For single-page apps, configure your server to redirect all requests to `index.html`.

**Nginx Example:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache Example (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔐 Environment Variables (Optional)

For better security, you can move your Supabase credentials to environment variables:

### Step 1: Create `.env` File
```env
VITE_SUPABASE_URL=https://stcwoouynrkjrhkrxpaq.supabase.co
VITE_SUPABASE_ANON_KEY=your_api_key_here
```

### Step 2: Update `src/lib/supabase.js`
```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Step 3: Configure in Hosting Platform
Add environment variables in your hosting platform's dashboard:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project settings → Environment Variables

---

## ✅ Post-Deployment Checklist

- [ ] App loads correctly at production URL
- [ ] All pages are accessible
- [ ] Login/signup works
- [ ] Google OAuth works (if configured)
- [ ] Booking functionality works
- [ ] Profile page shows user data
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] Supabase redirect URLs updated
- [ ] SSL certificate is active (HTTPS)

---

## 🔧 Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check browser console for errors. Ensure `base` path in `vite.config.js` is correct.

### Issue: 404 on page refresh
**Solution**: Configure server to redirect all routes to `index.html` (see server configuration above).

### Issue: Google OAuth not working
**Solution**: 
1. Update redirect URLs in Supabase Dashboard
2. Add production URL to Google OAuth settings
3. Ensure HTTPS is enabled

### Issue: API calls failing
**Solution**: 
1. Check Supabase URL and API key
2. Verify CORS settings in Supabase
3. Check browser console for specific errors

### Issue: Styles not loading
**Solution**: 
1. Ensure Tailwind CSS is properly configured
2. Check that PostCSS is processing CSS
3. Clear browser cache

---

## 🎯 Performance Optimization

### 1. Enable Compression
Most hosting platforms enable gzip/brotli automatically.

### 2. Add Caching Headers
Configure your hosting platform to cache static assets.

### 3. Optimize Images
If you add images, use WebP format and lazy loading.

### 4. Code Splitting
Vite automatically code-splits your app. No additional configuration needed.

### 5. Analyze Bundle Size
```bash
npm run build -- --mode production
```

---

## 📊 Monitoring

### Recommended Tools
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Add to `index.html`
- **Sentry**: Error tracking
- **Supabase Dashboard**: Monitor database usage

---

## 🔄 Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 🎉 You're Live!

Your Yoga Studio app is now deployed and accessible to users worldwide!

**Next Steps:**
1. Share the URL with your yoga studio
2. Monitor user feedback
3. Add more features as needed
4. Keep dependencies updated

---

**Need help?** Check the main README.md or Supabase documentation.
