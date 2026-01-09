import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Munthasir Shiraz',
        short_name: 'Munthasir',
        description: 'Developer & Writer. Building digital experiences and exploring the creative process.',
        start_url: '/',
        display: 'standalone',
        background_color: '#F3E9DC',
        theme_color: '#F3E9DC',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
