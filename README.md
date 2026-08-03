# Jupyter Portfolio Lab

A personal portfolio website styled as a JupyterLab notebook: an interactive
terminal cell plus notebook cells for About Me, Internships, Projects, Resume,
and Contact.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deployment

Pushing to `main` builds a static export and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`.
