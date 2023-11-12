# React Template

Project create from quentinvdr's template for React school projects.

## Installation and Start

- Clone the project
- Navigate to the project directory
- Add .env file in the root directory (see .env.example)
- Run these commands

```bash
# 📦 Install dependencies
npm install
pnpm install
yarn install

# ▶️ Run development server
npm run dev
pnpm run dev
yarn dev
```

## Project Architecture

This project follows a specific structure for organization and ease of navigation:

- 📁 `public`: This directory contains all static files like favicon, manifest, images, etc.
- 📁 `src`: This is the main directory that contains the project source code. It includes:
  - 📁 `api`: This directory contains all the requests (fetch).
  - 📁 `components`: This directory contains all the React components (business logic). Each component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `global`: This directory contains components used in multiple pages, such as headers & footers. Each global component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `pages`: This directory contains React pages. The business logic is in the components.
  - 📁 `routes`: This directory contains the routes (react-router).
  - 📁 `stores`: This directory contains the store keys (react-query).
  - 📁 `styles`: This directory contains global styles (variables, theme, etc.).
  - 📁 `translations`: This directory contains translations (i18n).
  - 📁 `utils`: This directory contains utilities (reusable functions, etc.).
  - 📄 `main.jsx`: This is the main project file and the entry point of the project.
- 📄 `package.json`: This is the project configuration file.
