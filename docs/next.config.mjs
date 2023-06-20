import nextra from 'nextra'

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    latex: true,
    flexsearch: {
        codeblocks: false
    },
    defaultShowCopyCode: true
})


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Eslint behaves weirdly in this monorepo.
        ignoreDuringBuilds: true
    },
}

export default withNextra(nextConfig)
