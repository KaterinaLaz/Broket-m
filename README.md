# Broket

| Τεχνολογία        | Στάδιο         | Πού χρησιμοποιείται             | Τι σου προσδίδει                                         |
|------------------|----------------|----------------------------------|----------------------------------------------------------|
| **TypeScript**   | ✅ Εγκατεστημένο | Frontend (React)                | Type safety, καλύτερη συντήρηση, IDE auto-complete      |
| **React**        | ✅ Εγκατεστημένο | UI Library (client)             | Γρήγορο, component-based, μεγάλο οικοσύστημα             |
| **Vite**         | ✅ Εγκατεστημένο | Build tool (client)             | Πολύ γρήγορο startup/dev server για React + TS          |
| **npm**          | ✅ Χρησιμοποιείται | Διαχείριση πακέτων              | Εγκαθιστά και διαχειρίζεται όλα τα dependencies          |
| **Git**          | ✅ Χρησιμοποιείται | Version control                 | Παρακολούθηση αλλαγών κώδικα                             |
| **GitHub**       | ✅ Χρησιμοποιείται | Remote code hosting             | Online συνεργασία, προβολή project, version history      |
| **TailwindCSS**  | 🔜 Προγραμματισμένο | Styling (client)               | Utility-first CSS, responsive design, γρήγορο prototyping |
| **ShadCN UI**    | 🔜 Προγραμματισμένο | UI components                  | Minimal μοντέρνα components, έτοιμα layout blocks         |
| **React Query**  | 🔜 Προγραμματισμένο | Data fetching (client)         | Caching, loading states, error handling out of the box    |
| **Zod**          | 🔜 Προγραμματισμένο | Form validation (client)       | Type-safe validation χωρίς boilerplate                    |
| **React Hook Form** | 🔜 Προγραμματισμένο | Φόρμες UI                    | Lightweight φόρμες με λιγότερο κώδικα και καλή UX         |
| **Express.js**   | 🔜 Προγραμματισμένο | Backend API (server)           | Lightweight framework για REST APIs                       |
| **Node.js**      | ✅ Εγκατεστημένο | Backend runtime                | Τρέχει τον Express server, κοινό σε full-stack έργα       |
| **Prisma**       | 🔜 Προγραμματισμένο | ORM για PostgreSQL             | Τύποι, auto migrations, ευκολία σε CRUD ops               |
| **PostgreSQL**   | 🔜 Προγραμματισμένο | Database                       | Structured, αξιόπιστη βάση για χρήστες & συναλλαγές       |
| **JWT**          | 🔜 Προγραμματισμένο | Authentication                 | Secure token-based login                                  |
| **bcrypt**       | 🔜 Προγραμματισμένο | Password hashing               | Προστασία credentials                                     |
| **.env**         | 🔜 Προγραμματισμένο | Config values                  | Κρυφά credentials / keys (DB_URL, JWT_SECRET)             |
| **Render / Railway** | 🔜 Προαιρετικό Hosting | Express + Postgres backend | Δωρεάν hosting με CI/CD δυνατότητες                       |
| **Vercel / Netlify** | 🔜 Προγραμματισμένο | Hosting του React frontend     | Δωρεάν hosting + auto-deploy από Git                      |

# 💸 Broket

**Broket** is a modern, minimal budgeting web app designed for young people who want to track, analyze, and manage their personal finances in a smart and intuitive way.

## 🔍 What it does

- 💰 Add, edit, and delete income and expense entries
- 📂 Organize spending by categories (e.g. Food, Rent, Transport)
- 📊 Visualize monthly summaries with charts
- 📅 Filter transactions by month or category
- 🚨 Receive alerts when exceeding budget limits
- 📄 Export data to CSV or PDF (coming soon)
- 🔐 Secure login using JWT authentication

## 🛠️ Tech Stack

| Layer         | Technologies                                                  |
|---------------|---------------------------------------------------------------|
| Frontend      | React + Vite + TypeScript + TailwindCSS + ShadCN UI          |
| State/Data    | React Query + React Hook Form + Zod                          |
| Charts        | Recharts / Chart.js                                          |
| Backend       | Express.js + Node.js + JWT + bcrypt                          |
| Database      | PostgreSQL + Prisma ORM                                      |
| Hosting       | Vercel (frontend) + Railway or Render (backend)              |

## 🚀 Goals

- Build a full-stack app without Firebase or third-party auth
- Practice real-world patterns (auth, form validation, protected routes)
- Deploy on free tiers with CI/CD pipelines
- Showcase it in a clean and professional GitHub repo

