# Dream Decor Studio Iceland

Next.js website for an Iceland-based event decoration studio.

## Features

- Responsive navy/gold visual identity
- EN/IS language switch
- Six event service and portfolio categories
- Portfolio carousels with 40 local images
- Inquiry form with phone, preferred contact, event details, guest count, budget, and mood
- Resend email delivery route with server validation and honeypot protection
- Print collection with downloadable business card, flyers, and consultation voucher
- Vercel-ready project structure

## Key files

- `src/app/page.tsx` - homepage sections and interactive behavior
- `src/content/site.ts` - images, brand, gallery, contact data
- `src/content/translations.ts` - English/Icelandic copy
- `src/components/InquiryForm.tsx` - translated inquiry form
- `src/app/api/inquiry/route.ts` - validated Resend email delivery
- `src/app/print/page.tsx` - client preview gallery and PDF downloads
- `scripts/generate_print_materials.py` - reproducible PDF generator
- `src/app/globals.css` - design system and responsive styling

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

The print collection is available at `http://localhost:3000/print`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Email configuration

Set these variables in Vercel:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

## Later updates

- Add Noona booking link or iframe when the business account is ready.
- Replace stock photos with the client's real event photos.
- Replace the Vercel URL with the final custom domain.
