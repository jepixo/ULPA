/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#009473',
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
