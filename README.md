# Dream Decor Studio Iceland

Next.js website for an Iceland-based event decoration studio.

## Features

- Responsive navy/gold visual identity
- EN/IS language switch
- Portfolio carousels with 40 local images
- Inquiry form with event details, guest count, support type, and mood
- Vercel-ready project structure

## Key files

- `src/app/page.tsx` - homepage sections and interactive behavior
- `src/content/site.ts` - images, brand, gallery, contact data
- `src/content/translations.ts` - English/Icelandic copy
- `src/components/InquiryForm.tsx` - translated inquiry form
- `src/app/api/inquiry/route.ts` - placeholder API route for future email delivery
- `src/app/globals.css` - design system and responsive styling

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Later updates

- Connect `/api/inquiry` to Resend, Formspree, or another email service.
- Add Noona booking link or iframe when the business account is ready.
- Replace stock photos with the client's real event photos.
- Update contact details in `src/content/site.ts`.
