/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            textColor: {
                skin: {
                    base: 'var(--color-text-base)',
                    muted: 'var(--color-text-muted)',
                    prim: 'var(--color-text-prim)',
                    blue: 'var(--color-text-blue)',
                    red: 'var(--color-text-red)',
                }
            },
            backgroundColor: {
                skin: {
                    bg: 'var(--color-background)',
                    bgAccent: 'var(--color-background-accent)',
                    buttPrim: 'var(--color-button-prim)',
                    buttPrimHover: 'var(--color-button-prim-hover)',
                    buttBlue: 'var(--color-button-bl)',
                    buttRed: 'var(--color-button-rd)',
                }
            },
            borderColor: {
                skin: {
                    prim: 'var(--color-button-prim)',
                    hover: 'var(--color-button-prim-hover)',
                }
            },

            fontSize: {
                'h1': '40px',
                'h2': '32px',
                'h3': '24px',
                'h4': '20px',
                'h5': '16px',
                'h6': '14px',
                'button': '14px',

            },
            fontFamily: {
                sans: ["Spectral", "Source Sans Pro", "Helvetica", "sans-serif"].join(","),
            }
        },
    },
    plugins: [],
}