# React Template

Project create from quentinvdr's template for React school projects.

## Installation and Start

- Clone the project
- Navigate to the project directory
- Add .env file in the root directory (see .env.example)
- Run these commands

```bash
# Install dependencies
npm install
pnpm install
yarn install

# Run development server
npm run dev
pnpm run dev
yarn dev
```

## Project Architecture

- `public`: directory containing static files (favicon, manifest, images, etc...)
- `src`: directory containing the project source code
- `src/api`: directory containing the requests (fetch)
- `src/components`: directory containing the React components (business logic)
  - `src/components/{ComponentName}`: Component name should be in PascalCase
    - `src/components/{ComponentName}/{ComponentName}.jsx`: Main component file
    - `src/components/{ComponentName}/{ComponentName}.module.scss`: Component style file (scoped to the component)
  - `src/components/global/{ComponentName}`: Component name should be in PascalCase
    - `src/components/global/{ComponentName}/{ComponentName}.jsx`: Main component file (global = component used in multiple pages, such as headers & footers)
    - `src/components/global/{ComponentName}/{ComponentName}.module.scss`: Component style file (scoped to the component) - (global = component used in multiple pages, such as headers & footers)
- `src/pages`: directory containing React pages (simpler, business logic is in the components)
- `src/routes`: directory containing the routes (react-router)

- `src/stores`: directory containing the store keys (react-query)
- `src/styles`: directory containing global styles (variables, theme, etc...)
- `src/translations`: directory containing translations (i18n)
- `src/utils`: directory containing utilities (reusable functions, etc...)
- `src/main.jsx`: main project file (entry point)
- `package.json`: project configuration file
