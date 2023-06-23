# React Use Hooks

ReactUse Hooks is a collection of reusable React Hooks based on the real-world use cases we encountered while building
[Newsmast](https://newsmast.org).

## Features

- 📚 **Docs:** Detailed docs for each hook.
- 🐣 **Tiny:** Less than 1.03kb gzipped.
- 🦾 **Typed:** Written in TypeScript with predictable static types.
- 📦 **Tree-shakable:** Only import what you need.
- 🌎 **No bundler required:** Usable via CDN.
- 🔋 **SSR Friendly:** Use hooks in Next.js or any other SSR framework without any issues.

# Usage

Every single hook is inferred by TypeScript, so you don't need to specify the type of the hook.

```tsx
import {useLocalStorage} from '@reactusehooks/core'

const App = () => {
    const [value, setValue] = useLocalStorage('my-key', 'my-value')

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}
```

Refer to the [documentation](https://reactuse-hooks.vercel.app/) for more information.

# Installation

```bash
pnpm install @reactusehooks/core
```

# Packages

List of packages in this monorepo.

| Package Name                             | Version                                                                    | Size                                                                                                         |
|------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [`@reactusehooks/core`](./packages/core) | ![npm](https://img.shields.io/npm/v/@reactusehooks/core?style=flat-square) | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@reactusehooks/core?logo=npm&style=flat) |

# Development

This React Use Hooks uses PNPM workspaces to manage the packages and Turbo Repo to manage the monorepo.

## Installation

```bash
pnpm install
```

## Commands

| Command      | Description                                                 |
|--------------|-------------------------------------------------------------|
| `pnpm build` | Build all packages.                                         |
| `pnpm dev`   | Start the development server for the documentation website. |
