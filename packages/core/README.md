# @reactusehooks/core  ![npm](https://img.shields.io/npm/v/@reactusehooks/core?style=flat-square)

The core of react-use-hooks which contains the most common hooks.

## Features

- 🎣 **Hooks:** 4+ hooks for common tasks.
- 📦 **Tree-shakable:** Only import what you need.
- 🌐 **TypeScript:** Written in TypeScript with predictable static types.
- 📚 **Docs:** Each hook has a detailed docs.
- 🐣 **Tiny:** Less than 1.5kb gzipped.
- 🎯 **Works with Next.js:** Use hooks in Next.js without any issues.

## Install

```bash
npm install @reactusehooks/core
```

## Usage

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

## Documentation

Full documentation can be found at [https://reactuse-hooks.vercel.app/](https://reactuse-hooks.vercel.app/).
