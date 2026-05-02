# Aristo Avilla Portfolio - Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `aristo-avilla-portfolio`
3. Choose Public (for portfolio showcase)
4. Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, copy the HTTPS URL from GitHub, then run these commands in your terminal:

```powershell
# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/aristo-avilla-portfolio.git

# Rename branch to main (optional, GitHub default)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Web Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click "Add New Project"
4. Import your `aristo-avilla-portfolio` repository
5. Leave default settings
6. Click "Deploy"
7. Vercel will automatically build and deploy your site!

### Option B: Deploy via Vercel CLI

```powershell
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

Once deployed to Vercel:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., aristo-avilla.com)
4. Follow DNS configuration steps provided by Vercel

## Step 5: Automatic Deployments

After initial setup:
- Every push to the `main` branch on GitHub will automatically trigger a new deployment on Vercel
- Preview deployments are created for pull requests
- You can view deployment history in Vercel dashboard

## Environment Variables (if needed in future)

To add environment variables:
1. Go to Vercel project → Settings → Environment Variables
2. Add your variables
3. Redeploy to apply changes

## Verify Deployment

After deployment completes:
1. Vercel will provide your live URL (e.g., `aristo-avilla-portfolio.vercel.app`)
2. Visit the URL to verify the site is live
3. Check all sections and links are working correctly

## Troubleshooting

### Build Fails on Vercel

If the build fails on Vercel but worked locally, check:
- Node version compatibility
- Environment variables are set
- All dependencies are in package.json (not just node_modules)

### Domain DNS Issues

If custom domain isn't connecting:
- Verify DNS records are correctly configured
- Wait 24-48 hours for DNS propagation
- Check Vercel's DNS troubleshooting guide

### Site Shows Old Version

- Clear browser cache (Ctrl+Shift+Delete)
- Force refresh (Ctrl+F5)
- Verify latest deployment is live in Vercel dashboard

## Contact for Support

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Support: [github.com/support](https://github.com/support)
