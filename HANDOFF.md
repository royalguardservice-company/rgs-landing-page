# Project Handoff Document
## Royal Guard Security (RGS) Website

> **Last Updated:** 2026-01-26
> **Project Type:** Corporate Website - Security & Cleaning Services Company
> **Live Site:** https://rgs-guard.com

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Service Accounts & Credentials](#service-accounts--credentials)
4. [Domain & Hosting](#domain--hosting)
5. [Environment Variables](#environment-variables)
6. [Deployment Instructions](#deployment-instructions)
7. [Maintenance & Troubleshooting](#maintenance--troubleshooting)
8. [Company Information](#company-information)

---

## Project Overview

**Royal Guard Security (RGS)** is a professional security and cleaning services company based in Bangkok, Thailand. This website serves as their corporate presence, showcasing three main service categories:

- **Security Guard Services** - Male/female security guards for various facilities
- **Cleaning Services** - Professional cleaning for buildings, offices, and residential
- **Technology Solutions** - CCTV, barriers, monitoring systems, and management apps

### Key Features
- Responsive design with Tailwind CSS v4
- Contact form with bot protection (Cloudflare Turnstile)
- Email notification via Resend
- Cookie consent management (PDPA compliant)
- Privacy policy page
- Thai language support

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.16.11 | Static Site Generator |
| **TypeScript** | 5.9.3 | Type Safety |
| **Tailwind CSS** | 4.1.18 | Styling |
| **@astrojs/cloudflare** | 12.6.12 | Cloudflare Pages Adapter |
| **Resend** | 6.8.0 | Email Service |
| **vanilla-cookieconsent** | 3.1.0 | Cookie Consent Management |
| **wrangler** | 4.60.0 | Cloudflare Workers CLI |

---

## Service Accounts & Credentials

### 1. GitHub Repository

**Repository Name:** `royal-guard-security` (or custom name)

**Transfer Options:**
- **Option A:** Transfer ownership to client's GitHub account
  1. Go to repository Settings → General
  2. Scroll to "Danger Zone" → "Transfer ownership"
  3. Enter client's GitHub username and confirm

- **Option B:** Add client as collaborator with admin access
  1. Go to repository Settings → Collaborators
  2. Add client's GitHub username with "Admin" permission

**Repository Access After Handoff:**
```
URL: [YOUR_REPO_URL]
Branch: main
```

---

### 2. Cloudflare Account

**Project Name:** `rgs-landing-page`

**Configuration Files:**
- `wrangler.jsonc` - Cloudflare Workers configuration
- `astro.config.mjs` - Astro build configuration

**Cloudflare Services Used:**

| Service | Purpose | Status |
|---------|---------|--------|
| **Cloudflare Pages** | Website hosting | Active |
| **Cloudflare Turnstile** | Bot protection for contact form | Active |
| **Custom Domain** | rgs-guard.com | Configured |

**Transfer Options:**
- **Option A:** Add client as team member in Cloudflare
  1. Go to Cloudflare Dashboard → Your Team → Members
  2. Invite member with appropriate permissions

- **Option B:** Transfer Pages project to client's Cloudflare account
  1. Export project configuration
  2. Client creates new project in their account
  3. Re-deploy with client's account

**Cloudflare Dashboard:** https://dash.cloudflare.com

---

### 3. Domain Name

**Primary Domain:** `rgs-guard.com`
**Secondary Domain (mentioned in robots.txt):** `royalguardsecurity.com`

**DNS Configuration Needed:**

```
Type: A / AAAA / CNAME
Name: rgs-guard.com (or @)
Target: [Cloudflare Pages assigned domain]
Proxy: Proxied (Orange cloud)

Type: A / AAAA / CNAME
Name: www
Target: [Cloudflare Pages assigned domain]
Proxy: Proxied (Orange cloud)
```

**Transfer Options:**
- **Option A:** Transfer domain registrar account to client
- **Option B:** Update nameservers to point to client's Cloudflare account
- **Option C:** Keep current arrangement and update DNS records as needed

---

### 4. Resend (Email Service)

**Purpose:** Sends contact form submissions to company email

**Current Configuration:**
```javascript
From: royalguardservice@rgs-guard.com
To: royalguardservices2016@gmail.com
```

**Environment Variables Required:**
```bash
RESEND_API_KEY=           # Resend API key (secret)
RESEND_FROM_EMAIL=        # Sender email address
RESEND_TO_EMAIL=          # Recipient email address
```

**Transfer Options:**
- **Option A:** Transfer Resend account to client
  1. Go to Resend Dashboard → Settings → Account
  2. Follow account transfer process

- **Option B:** Create new Resend account for client
  1. Client signs up at https://resend.com
  2. Verify sender domain (rgs-guard.com)
  3. Generate new API key
  4. Update environment variables in Cloudflare

**Resend Dashboard:** https://resend.com/dashboard

**Important:** Domain verification required for `rgs-guard.com` to send emails

---

### 5. Google Analytics

**Current Status:** Google Analytics was previously integrated but has been **removed** from the codebase.

**To Re-enable (if needed):**
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `src/layouts/Layout.astro`:
```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script define:vars={{ MEASUREMENT_ID: 'G-XXXXXXXXXX' }}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
</script>
```

---

### 6. Cloudflare Turnstile (Bot Protection)

**Purpose:** Protects contact form from automated spam/bot submissions

**Current Site Key:** `0x4AAAAAACOrYXr0wC0JXGc2`

**Environment Variables Required:**
```bash
TURNSTILE_SITE_KEY=    # Public key (already in wrangler.jsonc)
TURNSTILE_SECRET_KEY=  # Secret key (must be added to Cloudflare env vars)
```

**Management:** https://dash.cloudflare.com/?to=/:account/turnstile

**Transfer:** Included with Cloudflare account transfer

---

## Environment Variables

### Required Environment Variables

Configure these in **Cloudflare Pages** or `wrangler.jsonc`:

```bash
# Cloudflare Turnstile (Bot Protection)
TURNSTILE_SITE_KEY=0x4AAAAAACOrYXr0wC0JXGc2
TURNSTILE_SECRET_KEY=[YOUR_SECRET_KEY]

# Resend (Email Service)
RESEND_API_KEY=[YOUR_RESEND_API_KEY]
RESEND_FROM_EMAIL=royalguardservice@rgs-guard.com
RESEND_TO_EMAIL=royalguardservices2016@gmail.com
```

### How to Set Environment Variables in Cloudflare Pages

1. Go to Cloudflare Dashboard → Pages → `rgs-landing-page`
2. Navigate to Settings → Environment variables
3. Add variables for **Production** and/or **Preview** environments
4. Save and redeploy

### How to Set Environment Variables in wrangler.jsonc

Edit `wrangler.jsonc`:
```json
{
  "vars": {
    "TURNSTILE_SITE_KEY": "0x4AAAAAACOrYXr0wC0JXGc2",
    "TURNSTILE_SECRET_KEY": "[YOUR_SECRET_KEY]",
    "RESEND_FROM_EMAIL": "royalguardservice@rgs-guard.com",
    "RESEND_TO_EMAIL": "royalguardservices2016@gmail.com"
  },
  "secrets": [
    {
      "name": "RESEND_API_KEY",
      "value": "[YOUR_RESEND_API_KEY]"
    }
  ]
}
```

For secrets, use command line:
```bash
npx wrangler secret put RESEND_API_KEY
```

---

## Deployment Instructions

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Cloudflare Pages

**Option 1: Deploy via Wrangler CLI**

```bash
# Build the project
npm run build

# Deploy to Cloudflare
npx wrangler pages deploy dist

# Or with custom domain
npx wrangler pages deploy dist --project-name=rgs-landing-page
```

**Option 2: Connect GitHub Repository (Recommended for Auto-Deploy)**

1. Go to Cloudflare Dashboard → Pages → Create a project
2. Select "Connect to Git"
3. Authorize GitHub and select the repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
5. Add environment variables
6. Save and deploy

**Build Configuration:**
```yaml
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
Node.js version: 18 or later
```

---

## Maintenance & Troubleshooting

### Common Issues

**1. Contact form not sending emails**

Check:
- Resend API key is correctly set in environment variables
- Domain `rgs-guard.com` is verified in Resend dashboard
- Check Cloudflare Workers logs for errors
- Verify `RESEND_TO_EMAIL` is correct

**2. Turnstile widget not loading**

Check:
- `TURNSTILE_SITE_KEY` is correctly set
- No ad blockers are interfering
- Check browser console for errors
- Verify Turnstile site is active in Cloudflare dashboard

**3. Build fails**

Check:
- Node.js version is 18 or later
- All dependencies are installed: `npm install`
- No TypeScript errors: `npm run astro check`

**4. Domain not resolving**

Check:
- DNS records point to Cloudflare Pages
- Cloudflare SSL/TLS mode is set to "Full" or "Full (Strict)"
- Domain is not expired

### File Structure

```
rgs/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── policy.astro         # Privacy Policy
│   │   └── api/
│   │       └── contact.ts       # Contact form endpoint
│   ├── components/
│   │   └── [Reusable components]
│   ├── layouts/
│   │   └── Layout.astro         # Main layout
│   ├── styles/
│   │   └── global.css
│   └── assets/
│       └── [Images, fonts]
├── public/
│   └── [Static files]
├── astro.config.mjs             # Astro configuration
├── wrangler.jsonc               # Cloudflare Workers config
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

### Updating Content

**Company Information:** Edit `src/layouts/Layout.astro` footer section

**Services:** Edit `src/pages/index.astro` services section

**Contact Email:** Update `RESEND_TO_EMAIL` in Cloudflare environment variables

**Privacy Policy:** Edit `src/pages/policy.astro`

---

## Company Information

### Legal Details

| Field | Value |
|-------|-------|
| **Company Name (Thai)** | บริษัท รักษาความปลอดภัย รอยัลการ์ด เซอร์วิสเซส จำกัด |
| **Company Name (English)** | Royal Guard Security Services Co., Ltd. |
| **License Number** | ตภ.2600068 |
| **Established** | 2016 |

### Contact Information

| Type | Value |
|------|-------|
| **Address** | 300/44 โครงการพรีเมียมเพลซ, ถนนนวมินทร์, เขตบึงกุ่ม, กรุงเทพมหานคร 10240 |
| **Phone** | 02-379-1713-4 |
| **Hotline 1** | 096-564-5493 |
| **Hotline 2** | 065-294-1962 |
| **Email** | royalguardservices2016@gmail.com |
| **Line ID** | 0816968904 |

### Domain Names

- **Primary:** rgs-guard.com
- **Secondary:** royalguardsecurity.com (redirect/alias)

---

## Handoff Checklist

### For Developer (To Complete)

- [ ] GitHub repository access transferred or client added as collaborator
- [ ] Cloudflare account access configured (team member or project transfer)
- [ ] Domain registrar access transferred or DNS documented
- [ ] Resend account transferred OR new account setup instructions provided
- [ ] All environment variables documented and delivered securely
- [ ] Google Analytics access provided (if applicable)
- [ ] Client trained on deployment process
- [ ] Support agreement finalized

### For Client (To Complete After Handoff)

- [ ] Accept GitHub repository invitation/transfer
- [ ] Accept Cloudflare team invitation OR set up new account
- [ ] Verify domain ownership and DNS configuration
- [ ] Set up Resend account and verify domain
- [ ] Update all environment variables in Cloudflare
- [ ] Test contact form functionality
- [ ] Set up Google Analytics property (if desired)
- [ ] Update any content/information as needed
- [ ] Obtain backup/recovery procedures

---

## Support & Contact

For questions or issues after handoff:

**Developer Contact:** [Your Name/Company]
**Email:** [Your Email]
**Phone:** [Your Phone]

**Useful Links:**
- Astro Documentation: https://docs.astro.build
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Resend Documentation: https://resend.com/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

---

*This document contains sensitive information. Keep it secure and share only with authorized personnel.*
