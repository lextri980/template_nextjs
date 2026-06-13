# <img src="./public/svg/vercel.svg" alt="My Skills" width="30" /> Next.js Template (SA Version)

[Next.js App router](https://nextjs.org/) boilerplate for a typical project

## 📦 Tech Stack

- **Core:** [`NextJS (16.1.6)`](https://nextjs.org/) [`ReactJS (19)`](https://reactjs.org/) [`TypeScript (5)`](https://www.typescriptlang.org/)
- **UI/UX:** [`Tailwind CSS (4)`](https://tailwindcss.com/) [`Material UI (7)`](https://mui.com/) [`Sonner toast (2)`](https://sonner.emilkowal.ski/)
- **Form:** [`React hook form (7)`](https://www.react-hook-form.com/) [`Zod (4)`](https://zod.dev/)
- **Global state:** [`Zustand (2)`](https://zustand-demo.pmnd.rs/)
- **API handler:** [`Tanstack Query (5)`](https://tanstack.com/query/latest)

## 💥 Develop version

<table>
  <tr>
    <th>No.</th>
    <th>Version</th>
    <th>Branch</th>
  </tr>
  <tr style="text-align: center">
    <td>1</td>
    <td>1.0</td>
    <td>
      <a href="https://github.com/lextri980/nextjs-template/tree/dev/tq-version-1.0">
        dev/tq-version-1.0
      </a>
    </td>
  </tr>
</table>

## ⚙️ Getting Started

```bash
# Clone and change directory to project
git clone https://github.com/lextri980/nextjs-template.git
cd nextjs-template

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Run the development server
pnpm run dev
```

Visit [http://localhost:4242](http://localhost:4242) in your browser.

## 🛠️ Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `pnpm run dev`    | Run in development mode |
| `pnpm run build`  | Build for production    |
| `pnpm start`      | Start production server |
| `pnpm run lint`   | Run ESLint              |
| `pnpm run format` | Run Prettier            |

## 📁 Project Structure

```
.
├── public/             # Public section
│   ├── fonts/          # Local fonts
│   ├── svg/            # SVG file type
│   └── image/          # Other image file type (.png,.jpg,...)
├── src/                # Application routes source
│   ├── app/            # Layouts and UI
│   ├── components/     # Components
│   ├── config/         # Config
│   ├── constans/       # Global constans
│   ├── contexts/       # Contexts
│   ├── hooks/          # Custom hooks
│   ├── services/       # Services
│   ├── stores/         # Redux toolkit store
│   ├── styles/         # Global & Specific styles
│   └── utils/          # Utilities
├── .env.example        # Environment variable example
└── eslint.config.mjs   # Eslint config
```

## 📦 Deployment

This project can be easily deployed to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

```bash
npm run build
npm start
```

## 📄 License

Author: [@lextri980](https://github.com/lextri980)

---

> Built with ❤️ using Next.js.
