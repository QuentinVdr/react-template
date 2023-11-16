# React Template

React template for school projects.

## Librairies

### Technology stack :

- Library/Framework JS : [React](https://reactjs.org/)
- Langage : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- Package Manager : [pnpm](https://pnpm.io/)
- Builder : [Vite](https://vitejs.dev/)
- Linter/Code formatter : [EsLint](https://eslint.org/) / [Prettier](https://prettier.io/)

#### Librairie Majeur :

Internalization :

- [i18next](https://www.i18next.com/)
- [React-i18next](https://react.i18next.com/)

Gestion des données :

- [React-Query](https://tanstack.com/query/v4/docs/react/overview) → Gestion du code asynchrone (Cache, gestion de l'état des Promise, etc)
- [Axios](https://axios-http.com/fr/docs/intro) → Client HTTP basé sur les Promise pour communiquer avec la partie Back-end
- [Zod](https://zod.dev/) → Librairie utilisée pour la validation des données d'envois/de retour depuis l'API

Construction/Validation de formulaire :

- [React-hook-form](https://react-hook-form.com/) → Librairie de state management et de validation des formulaires
- [Zod](https://zod.dev/) → Librairie utilisée pour faire de la validation des données des formulaires (Validation des données requises, messages d'erreur, des types de données, etc)

Routing :

- [React-router-dom](https://reactrouter.com/web/guides/quick-start) → Librairie utilisée pour gérer le routing et la navigation entre les pages de l'application

CSS :

- [Material UI](https://mui.com/) → UI Library components
- [Sass](https://sass-lang.com/) → Préprocesseur qui ajoute des fonctionnalités au CSS. Il permet, entre autres, de mieux structurer et simplifier le code, d'éviter les répétitions, etc

Icons :

- [Material Icons](https://mui.com/components/material-icons/) → Librairie d'icônes prêt à l'emploi

## Development

To install and update this template

- Clone the project
- Run these commands :

```bash
# Publish this template
npm publish --access public
```

## Usage

To use this template go to our workspace folder and run this command :

```bash
# Use this template
npx create-react-app my-app --template quentinvdr

# Use this template with local update
npx create-react-app my-app --template file:relative-path-to-template-folder
```

then refer to the README.md file in the generated project.
