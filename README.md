# itzmono-vite

A project template for Vite+ + TypeScript + React + Tailwind CSS + Blueprint apps 🚀

## Batteries Included

- :zap: [Vite+](https://viteplus.dev/) (Vite 8 / Rolldown)
- :shield: TypeScript
- :boom: React
- :wind_chime: Tailwind CSS
- :package: Blueprint
- :nail_care: Oxlint & Oxfmt (`vp check`)
- :sparkles: Renovate
- :robot: GitHub Actions (lint, visual regression, actionlint)

## Setup

Install the [Vite+ CLI](https://viteplus.dev/) (`vp`) if you don't have it yet:

```console
$ curl -fsSL https://vite.plus | bash
```

Then install dependencies:

```console
$ vp install
```

`vp` manages the Node.js runtime and pnpm version for this project automatically.

## Build

```console
$ vp build
```

You get built files in `dist/`.

## Development

```console
$ vp run dev
```

## Lint / Format / Type-check

```console
$ vp check        # check everything
$ vp check --fix  # auto-fix
```
