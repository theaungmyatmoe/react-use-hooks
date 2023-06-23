import {useRouter} from "next/router";

export default {
    logo: <span>🪝React Use Hooks</span>,
    project: {
        link: 'https://github.com/amm834/react-use-hooks',
    },
    banner: {
        key: '1.1.0-release',
        text: (
            <a href="https://reactuse-hooks.vercel.app" target="_blank">
                🎉 React Use Hooks 1.1.0 is released. Read more →
            </a>
        )
    },
    docsRepositoryBase: 'https://github.com/amm834/react-use-hooks/blob/main/docs/pages',
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – React Use Hooks',
            }
        }
    },
    footer: {
        text: (
            <span> MIT {new Date().getFullYear()} ©{' '} <a href="https://reactuse-hooks.vercel.app" target="_blank">React Use Hooks</a>. </span>
        )
    }
}
