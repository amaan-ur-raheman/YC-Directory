# YC Directory - Pitch Startup App

YC Directory is a modern web application for pitching, voting, and growing startup ideas. Built with [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io/), and [Tailwind CSS](https://tailwindcss.com/), it provides a beautiful, interactive platform for founders and enthusiasts to share and discover innovative projects.

---

## ✨ Features

- **Pitch Submission:** Submit your startup idea with rich Markdown support.
- **Voting System:** Engage with the community by voting on pitches.
- **Editor Picks:** Highlighted pitches curated by editors.
- **User Profiles:** Showcase your submissions and activity.
- **Responsive UI:** Sleek, mobile-friendly design using Tailwind CSS and custom utility classes.
- **Authentication:** Secure login and user management with NextAuth.
- **Analytics & Monitoring:** Integrated with Sentry for error tracking.
- **Sanity CMS:** Manage content and pitches with a powerful headless CMS.

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your-username/yc_directory.git
cd yc_directory
```

### 2. Install dependencies

```sh
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the required values:

```sh
cp .env.local.example .env.local
```

Set up your Sanity and authentication credentials as needed.

### 4. Run the development server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🛠️ Project Structure

```
app/                # Next.js app directory (routes, layouts, pages)
components/         # Reusable React components (forms, cards, UI)
lib/                # Utility functions, validation, and actions
public/             # Static assets (images, icons)
sanity/             # Sanity CMS configuration and queries
assets/             # Fonts and design assets
```

- **Custom Styling:** See [`app/globals.css`](app/globals.css) for utility classes and theme.
- **Pitch Details:** Rendered with Markdown using [`markdown-it`](https://github.com/markdown-it/markdown-it).
- **Editor Picks:** Curated via Sanity queries in [`app/(root)/startup/[id]/page.tsx`](<app/(root)/startup/[id]/page.tsx>).

---

## 🧩 Key Technologies

- [Next.js](https://nextjs.org/) (App Router)
- [Sanity.io](https://www.sanity.io/) (Headless CMS)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- [NextAuth.js](https://next-auth.js.org/) (Authentication)
- [Sentry](https://sentry.io/) (Error monitoring)
- [Lucide Icons](https://lucide.dev/) (Icon library)
- [Zod](https://zod.dev/) (Validation)

---

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

---

## 📝 Customization

- **UI Components:** Built with [shadcn/ui](https://ui.shadcn.com/) and custom styles.
- **Fonts:** Uses Work Sans, loaded via Next.js font optimization.
- **Theming:** Easily customize colors and layout in [`tailwind.config.ts`](tailwind.config.ts).

---

## 🛡️ Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app)

---

## 🤝 Contributing

Contributions are welcome! Please open issues and pull requests.

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Sentry](https://sentry.io/)

---

> Made with ❤️ for the
