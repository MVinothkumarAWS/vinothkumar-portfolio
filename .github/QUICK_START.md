# 🚀 Quick Start - CI/CD Setup

## ✅ What's Been Created

4 GitHub Actions workflows are ready:
1. ✅ **CI Pipeline** - Builds and tests on every push
2. ✅ **Deployment** - Auto-deploys to production
3. ✅ **Code Quality** - Enforces quality standards on PRs
4. ✅ **Dependency Updates** - Weekly package checks

---

## 🎯 Quick Setup (5 Minutes)

### Step 1: Add GitHub Secrets

Go to: **Your Repo → Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

| Secret Name | Value |
|------------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_77tl60m` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_yy8ghvr` |
| `VITE_EMAILJS_ACCESS_TOKEN` | `ZFS2fAybJE5rfSU25` |

### Step 2: Choose Deployment (Pick One)

#### Option A: Vercel (Recommended - Free)
```bash
npm i -g vercel
vercel login
vercel
```

Then add to GitHub Secrets:
- `VERCEL_TOKEN` - From https://vercel.com/account/tokens
- `VERCEL_ORG_ID` - From project settings
- `VERCEL_PROJECT_ID` - From project settings

#### Option B: Netlify
```bash
npm i -g netlify-cli
netlify login
netlify init
```

Then add to GitHub Secrets:
- `NETLIFY_SITE_ID` - From site settings
- `NETLIFY_AUTH_TOKEN` - From https://app.netlify.com/user/applications

Edit `.github/workflows/deploy.yml`:
- Comment out Vercel section (lines 40-46)
- Uncomment Netlify section (lines 48-54)

### Step 3: Push to GitHub

```bash
git add .
git commit -m "feat: add CI/CD pipelines"
git push origin main
```

### Step 4: Check Actions Tab

Go to **Actions** tab in your repo → You should see workflows running! ✅

---

## 🎨 Add Status Badges (Optional)

Replace `YOUR_USERNAME/YOUR_REPO` with your GitHub username and repo name:

Add to your `README.md`:
```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml/badge.svg)
```

---

## 📊 What Each Workflow Does

### CI - Build and Test
- ✅ Runs on: Every push & PR
- ✅ Tests: TypeScript + ESLint + Build
- ✅ Node versions: 18.x & 20.x
- ✅ Result: Build artifacts uploaded

### Deploy to Production
- ✅ Runs on: Push to main branch
- ✅ Deploys to: Vercel or Netlify
- ✅ Can trigger manually
- ✅ Result: Live website updated

### Code Quality Checks
- ✅ Runs on: Pull requests
- ✅ Checks: No console.log, no @ts-ignore
- ✅ Enforces: Zero ESLint warnings
- ✅ Result: Quality report generated

### Dependency Updates
- ✅ Runs on: Every Monday 9 AM UTC
- ✅ Checks: Outdated packages
- ✅ Updates: browserslist database
- ✅ Result: Weekly dependency report

---

## 🔒 Security Best Practices

✅ **Never commit `.env` file** (already in .gitignore)
✅ **Use GitHub Secrets** for all credentials
✅ **Enable branch protection** on main branch
✅ **Require PR reviews** before merging

---

## 🎯 Recommended: Branch Protection

**Settings → Branches → Add rule** for `main`:
- ✅ Require pull request before merging
- ✅ Require status checks: `build-and-test (20.x)`, `quality-checks`
- ✅ Require conversation resolution

---

## 🆘 Quick Troubleshooting

**Build fails?**
```bash
npm run ts:check
npm run lint
npm run build
```

**Deployment fails?**
- Check secrets are added correctly
- Verify deployment platform (Vercel/Netlify) is set up
- Check logs in Actions tab

**Need help?**
- Read full guide: `.github/SETUP_GUIDE.md`
- Check GitHub Actions docs
- Review workflow logs in Actions tab

---

## ✨ You're Done!

Your portfolio now has:
- ✅ Automated testing
- ✅ Continuous integration
- ✅ Automatic deployments
- ✅ Code quality enforcement
- ✅ Professional DevOps setup

**Next:** Push your code and watch the magic happen! 🚀
