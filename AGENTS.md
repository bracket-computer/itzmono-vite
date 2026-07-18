# Repository Guidelines

## Project Structure & Module Organization

- `src/`: Vite + React + TypeScript frontend (`main.tsx`, `App.tsx`, `index.css`).
- `tests/visual/`: Playwright visual regression tests and snapshot baselines.
- `scripts/run-visual-test.mjs`: Visual test wrapper that prints snapshot update guidance on failure.
- `.github/workflows/`: CI definitions for linting, visual regression, and actionlint.
- Root configs: `vite.config.mts` (Vite+ unified config: build, lint, fmt, staged hooks), `tsconfig.json`, `playwright.config.ts`.

## Toolchain

This project uses [Vite+](https://viteplus.dev/) (`vp` CLI). It manages the Node.js runtime (from `engines.node`) and pnpm version (from `devEngines`) automatically. Install it with `curl -fsSL https://vite.plus | bash` if missing. Formatting is Oxfmt and linting is Oxlint; both are configured in the `fmt` / `lint` blocks of `vite.config.mts` (there is no ESLint/Prettier).

## Build, Test, and Development Commands

- `vp install`: install JS dependencies.
- `vp run dev`: run the dev server locally.
- `vp build`: build the frontend bundle into `dist/`.
- `vp check`: run format, lint, and type checks (`vp check --fix` to auto-fix).
- `vp run typecheck`: run `tsc` directly.
- `vp run test:visual`: run visual regression tests.
- `vp run test:visual:update`: update visual snapshots for intentional UI changes.

`pnpm run <script>` also still works for the package.json scripts.

## Coding Style & Naming Conventions

- Use TypeScript + React function components with strict typing.
- Formatting is enforced by Oxfmt; linting uses Oxlint (configured in `vite.config.mts`). A pre-commit hook (`.vite-hooks/pre-commit`) runs `vp check --fix` on staged files.
- Use 2-space indentation in TS/TSX and keep imports grouped logically.
- React components: PascalCase filenames/exports (for example, `App.tsx`).
- Functions/variables: camelCase.

## Testing Guidelines

- No dedicated unit test framework is configured yet.
- Required quality gates are: `vp check`, `vp run typecheck`, and visual regression in PR CI.
- Before opening a PR, run: `vp check && vp run typecheck && vp build`.
- For UI or dependency updates, also run: `vp run test:visual`.
- Visual snapshot baselines are generated on macOS (CI runs `macos-latest`); on Linux the comparison fails due to font rendering differences even when nothing changed, so rely on CI for the final verdict.
- If visual regression fails and the change is intentional, run `vp run test:visual:update` on macOS (or download the CI artifact), commit updated snapshots, and rerun tests.
- If you add tests, prefer colocated `*.test.ts(x)` files under `src/` and document the new command in `package.json`.

## Commit & Pull Request Guidelines

- Recent history favors concise, imperative commit subjects (for example, `Update blueprintjs`).
- Keep commit titles short; include scope when useful (for example, `feat(ui): add greeting options`).
- PRs should include:
  - clear summary and rationale,
  - linked issue (if applicable),
  - screenshots/GIFs for UI changes,
  - confirmation that lint, typecheck, and build pass locally.
