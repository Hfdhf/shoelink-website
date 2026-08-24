# ShoeLink Footwear Website

A professional B2B footwear export website built with HTML, Bootstrap 5, and GitHub Pages.

## Features

- Responsive design for mobile and desktop
- Product catalog with category filtering
- Product detail pages
- Contact form and sample request form
- FAQ page
- About Us page
- Decap CMS for content management
- Multi-language ready (currently English only)

## File Structure
shoelink-website/
├── index.html (Homepage)
├── products.html (Product listing page)
├── product-detail.html (Product detail page)
├── about.html (About Us page)
├── contact.html (Contact page with form)
├── sample-request.html (Sample request page)
├── faq.html (FAQ page)
├── css/
│ └── style.css (Custom styles)
├── js/
│ └── main.js (Main JavaScript)
├── _data/
│ ├── products.json (Product data - editable via CMS)
│ ├── categories.json (Category data - editable via CMS)
│ └── site.json (Site settings - editable via CMS)
├── admin/
│ ├── index.html (CMS entry point)
│ └── config.yml (CMS configuration)
└── .nojekyll (Prevents Jekyll processing)

## How to Update Content

### Option 1: Direct GitHub Editing
Edit the JSON files in the `_data` folder directly on GitHub.

### Option 2: Use the CMS (Decap CMS)
1. Go to `https://your-site.com/admin/`
2. Log in with your GitHub account
3. Edit products, categories, and site settings visually

## Important Notes

- The contact form requires a Formspree account. Replace `YOUR_FORM_ID` in `contact.html` and `sample-request.html` with your actual Formspree form ID.
- The Tawk.to chat requires your Tawk.to property ID. Replace `YOUR_TAWK_ID` in all HTML files with your actual ID.
- Update `admin/config.yml` with your correct GitHub username and repository name.

## Deployment

This site is designed to be hosted on GitHub Pages. To deploy:

1. Go to repository Settings
2. Click on "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click Save

Your site will be available at: `https://Hfdhf.github.io/shoelink-website/`
