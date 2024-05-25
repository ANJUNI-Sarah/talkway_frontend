/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,ts,tsx}",
        "./src/**/**/*.{ts,tsx}",
        "./components/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {},
    },
    plugins: [],
};
