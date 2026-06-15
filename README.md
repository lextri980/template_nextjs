# <img src="./public/svg/vercel.svg" alt="My Skills" width="30" /> Next.js Template

[Next.js App router](https://nextjs.org/) boilerplate for a typical project

## 📦 Tech Stack

- **Core:** [`NextJS (16.2.9)`](https://nextjs.org/) [`ReactJS (19.2.4)`](https://reactjs.org/) [`TypeScript (5)`](https://www.typescriptlang.org/)
- **UI/UX:** [`Tailwind CSS (4)`](https://tailwindcss.com/) [`Hero UI (3.1)`](https://heroui.com/en/docs/react/getting-started) [`Sonner toast (2.0.7)`](https://sonner.emilkowal.ski/)
- **Form:** [`React hook form (7.78)`](https://www.react-hook-form.com/) [`Zod (4.4.3)`](https://zod.dev/)
- **Global state:** [`Zustand (2)`](https://zustand-demo.pmnd.rs/)
- **API handler:** [`Tanstack Query (5.0.14)`](https://tanstack.com/query/latest)

## 💥 Develop version

<table>
  <tr>
    <th>No.</th>
    <th>Version</th>
    <th>Branch</th>
    <th>Update information</th>
  </tr>
  <tr style="text-align: center">
    <td>1</td>
    <td>1.1</td>
    <td>
      <a href="https://github.com/lextri980/nextjs-template/tree/dev/version-1.1">
        dev/version-1.1
      </a>
    </td>
    <td>
      <a href="https://github.com/lextri980/template_nextjs/blob/dev/version-1.1/READ_UPDATE.md">
        Go Detail
      </a>
    </td>
  </tr>
  <tr style="text-align: center">
    <td>2</td>
    <td>1.0</td>
    <td>
      <a href="https://github.com/lextri980/nextjs-template/tree/dev/version-1.0">
        dev/version-1.0
      </a>
    </td>
    <td>
      <a href="https://github.com/lextri980/template_nextjs/blob/dev/version-1.0/READ_UPDATE.md">
        Go Detail
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
pnpm dev
```

Visit [http://localhost:4242](http://localhost:4242) in your browser.

## 🛠️ Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `pnpm dev`        | Run in development mode           |
| `pnpm build`      | Build for production              |
| `pnpm start`      | Start production server           |
| `pnpm lint`       | Run ESLint                        |
| `pnpm format:all` | Run Prettier for all of the files |

## 📁 Project Structure

```
├── public/             # Public section
│   ├── fonts/          # Local fonts
│   ├── svg/            # SVG file type
│   └── image/          # Other image file type (.png,.jpg,...)
├── src/                # Application routes source
│   ├── apis/           # API hooks using tanstack-query
│   ├── app/            # Include pages router folder
│   ├── components/     # Components
│       ├── core/       # Atom components
│       ├── layout/     # Components based on many atom components
│   ├── configs/        # Configs
│   ├── contexts/       # Contexts
│   ├── hooks/          # Custom hooks
│   ├── modules/        # Function module of each page
│   ├── routers/        # Router constants
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
pnpm build
pnpm start
```

## 📄 License

Author: [@lextri980](https://github.com/lextri980)

---

> Built with ❤️ using Next.js.
