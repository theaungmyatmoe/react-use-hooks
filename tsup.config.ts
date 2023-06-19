import {defineConfig} from 'tsup'

export default defineConfig((options) => ({
    entry: ['index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm', 'iife'],
    minify: !options.watch,
    target: 'node14',
    outDir: 'dist',
    shims: true,
    treeshake: true,
}))
