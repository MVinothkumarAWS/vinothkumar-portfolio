# GitHub Actions CI/CD Setup Guide

## 🚀 Overview

This repository includes comprehensive CI/CD pipelines with the following workflows:

1. **CI - Build and Test** (`ci.yml`) - Runs on every push and PR
2. **Deploy to Production** (`deploy.yml`) - Deploys to Vercel/Netlify on main branch
3. **Code Quality Checks** (`code-quality.yml`) - Runs quality checks on PRs
4. **Dependency Updates** (`dependency-update.yml`) - Weekly dependency checks

---

## 📋 Required GitHub Secrets

You need to add the following secrets to your GitHub repository:

### Go to: Repository → Settings → Secrets and variables → Actions → New repository secret

### 1. EmailJS Credentials (Required for all workflows)
```
VITE_EMAILJS_SERVICE_ID=service_77tl60m
VITE_EMAILJS_TEMPLATE_ID=template_yy8ghvr
VITE_EMAILJS_ACCESS_TOKEN=ZFS2fAybJE5rfSU25
```

### 2. Vercel Deployment (If using Vercel)
```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

**How to get Vercel credentials:**
1. Go to https://vercel.com/account/tokens
2. Create a new token → Copy the token
3. Go to your project settings → General
4. Copy Project ID and Org ID

### 3. Netlify Deployment (If using Netlify - Alternative to Vercel)
```
NETLIFY_SITE_ID=your_site_id
NETLIFY_AUTH_TOKEN=your_auth_token
```

**How to get Netlify credentials:**
1. Go to https://app.netlify.com/user/applications
2. Create new access token
3. Go to Site settings → General → Site information
4. Copy Site ID

---

## 🔧 Setup Instructions

### Step 1: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret one by one:
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: `service_77tl60m`
   - Click **Add secret**
5. Repeat for all secrets listed above

### Step 2: Choose Deployment Platform

#### Option A: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel login`
3. Run: `vercel link` (in your project directory)
4. Add Vercel secrets to GitHub (see above)
5. Keep the Vercel deployment section in `deploy.yml`
6. Comment out the Netlify section

#### Option B: Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify login`
3. Run: `netlify init`
4. Add Netlify secrets to GitHub (see above)
5. Uncomment the Netlify section in `deploy.yml`
6. Comment out the Vercel section

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Add CI/CD pipelines"
git push origin main
```

### Step 4: Verify Workflows

1. Go to your GitHub repository
2. Click **Actions** tab
3. You should see workflows running
4. Check that all checks pass ✅

---

## 📊 Workflow Details

### 1. CI - Build and Test (`ci.yml`)

**Triggers:**
- Push to `main`, `master`, or `develop` branches
- Pull requests to these branches

**What it does:**
- ✅ Runs on Node.js 18.x and 20.x
- ✅ Installs dependencies
- ✅ TypeScript type checking
- ✅ ESLint validation
- ✅ Production build
- ✅ Uploads build artifacts
- ✅ Reports bundle size

**Status badges:**
Add to your README.md:
```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml/badge.svg)
```

---

### 2. Deploy to Production (`deploy.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Manual trigger (workflow_dispatch)

**What it does:**
- ✅ Runs all CI checks
- ✅ Builds production bundle
- ✅ Deploys to Vercel/Netlify
- ✅ Reports deployment status

**Manual deployment:**
Go to Actions → Deploy to Production → Run workflow

---

### 3. Code Quality Checks (`code-quality.yml`)

**Triggers:**
- Pull requests to `main`, `master`, or `develop`

**What it does:**
- ✅ TypeScript validation
- ✅ ESLint with zero warnings
- ✅ Checks for console.log statements
- ✅ Checks for TypeScript ignore comments
- ✅ Build verification
- ✅ Generates quality report

---

### 4. Dependency Updates (`dependency-update.yml`)

**Triggers:**
- Every Monday at 9 AM UTC (scheduled)
- Manual trigger

**What it does:**
- ✅ Updates browserslist database
- ✅ Checks for outdated packages
- ✅ Runs full test suite
- ✅ Reports outdated dependencies

---

## 🎯 Branch Protection Rules (Recommended)

Go to: Repository → Settings → Branches → Add rule

**For `main` branch:**
- ✅ Require a pull request before merging
- ✅ Require status checks to pass:
  - `build-and-test (20.x)`
  - `quality-checks`
- ✅ Require conversation resolution before merging
- ✅ Do not allow bypassing the above settings

---

## 🔍 Monitoring Your Pipelines

### View Pipeline Results
1. Go to **Actions** tab
2. Click on any workflow run
3. View detailed logs for each step
4. Check the summary for quick overview

### Failed Pipeline?
1. Click on the failed workflow
2. Expand the failed step
3. Read the error message
4. Fix the issue and push again

### Email Notifications
- GitHub automatically sends notifications for failed workflows
- Go to Settings → Notifications to configure

---

## 🚨 Troubleshooting

### Build fails with "Missing environment variables"
**Solution:** Add EmailJS secrets to GitHub (see Step 1)

### Vercel deployment fails
**Solution:** 
1. Check VERCEL_TOKEN is valid
2. Verify VERCEL_ORG_ID and VERCEL_PROJECT_ID
3. Ensure Vercel CLI is installed: `npm i -g vercel`

### TypeScript errors in CI but not locally
**Solution:**
```bash
npm run ts:check
# Fix any errors shown
```

### ESLint fails in CI
**Solution:**
```bash
npm run lint
# Fix warnings/errors
```

---

## 📈 Next Steps

### 1. Add Status Badges to README
```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml/badge.svg)
![Code Quality](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/code-quality.yml/badge.svg)
```

### 2. Set Up Branch Protection
Follow the branch protection rules above

### 3. Enable Dependabot (Optional)
Go to: Settings → Security → Dependabot → Enable

### 4. Add Code Coverage (Optional)
Install coverage tools and add to CI pipeline

---

## 🎉 You're All Set!

Your CI/CD pipeline is now configured and ready to use!

**What happens now:**
1. Every commit triggers build and test
2. Every PR gets quality checks
3. Merges to main automatically deploy to production
4. Weekly dependency checks keep your project up to date

**Questions?** Check GitHub Actions documentation or create an issue.
