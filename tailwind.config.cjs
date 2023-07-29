/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        keyframes: {
            wiggle: {
                '0%, 100%': { transform: 'rotate(-1deg)' },
                '50%': { transform: 'rotate(1deg)' },
            },
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
        },
        extend: {
            backgroundImage: {
                'home-light': "url('/HomeLightBackground.png')",
                'home-dark': "url('/HomeDarkBackground.png')",
                'about-light': "url('/AboutProjectLightBackground.png')",
                'about-dark': "url('/AboutProjectDarkBackground.png')",
            },
            dropShadow: {
                primary: '0px 4px 32px rgba(0, 71, 255, 0.25)',
            },
            boxShadow: {
                primary: '0px 4px 32px rgb(0, 71, 255)',
            },
            border: {
                1: '1px',
            },
            colors: {
                blue: '#0047FF',
                'light-blue': '#0080ff',
                white: '#FFFFFF',
                black: '#000000',
                'light-black': '#050505',
                gray: {
                    100: '#F1F1F1',
                    200: '#D3D3D3',
                    300: '#AAAAAA',
                    400: '#7B7B7B',
                    500: '#747474',
                    600: '#414141',
                    700: '#2C2C2C',
                    800: '#383838',
                },
            },
        },
    },
    plugins: [],
}
