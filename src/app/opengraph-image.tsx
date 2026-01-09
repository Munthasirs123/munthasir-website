import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Munthasir Shiraz - Developer & Writer';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Font loading (optional, using system fonts for simplicity and speed first)
    // In a real production app, you'd load a custom font here.

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#F3E9DC',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace', // Matching the site's mono aesthetic
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid #1a1a1a',
                        padding: '40px 80px',
                        backgroundColor: '#FFFCF6',
                        boxShadow: '10px 10px 0px #1a1a1a',
                    }}
                >
                    <h1
                        style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: '#1a1a1a',
                            margin: 0,
                            marginBottom: 20,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        MUNTHASIR SHIRAZ
                    </h1>
                    <p
                        style={{
                            fontSize: 30,
                            color: '#4a4a4a',
                            margin: 0,
                        }}
                    >
                        Developer & Writer
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
