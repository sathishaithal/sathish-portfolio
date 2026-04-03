# Sathish Portfolio

Personal portfolio website built with React and Vite.

This project showecases:
- Home
- About
- Skills
- Projects
- Education
- Contact

It includes:
- Light and dark theme switch
- Auto scroll to top on route change
- Responsive layout
- GitHub Pages deployment support

## Tech Stack

- React
- Vite
- React Router
- CSS
- ESLint

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run deploy
```

Builds the project and deploys `dist/` to GitHub Pages.

```GitHub deployment
npm run build
npm install gh-pages --save-dev
npm run deploy
```

## Project Structure

```text
src/
  components/    Reusable UI components
  pages/         Portfolio pages
  assets/        Images and static assets
  utils/         Small helper functions
```

## Routing

This app uses `HashRouter`, which is helpful for GitHub Pages hosting.

## Theme

The portfolio supports both dark and light themes.
The selected theme is saved in `localStorage`.

## Deployment

This project is configured for GitHub Pages with:

```js
base: '/sathish-portfolio/'
```

in `vite.config.js`.

If you change the repository name, update the `base` value and `homepage` in `package.json`.

## Author

Sathish Aithal V S
