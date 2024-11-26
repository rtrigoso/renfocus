export default function githubUserContentLoader({ src }: { src: string }): string {
    if (process.env.NODE_ENV !== 'production') {
        return `@/public/${src}`;
    }

    return `https://raw.githubusercontent.com/rtrigoso/renfocus/refs/heads/main/public/${src}`;
}