/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                mobile: { max: "700px" },
                desktop: { min: "701px" },
            },
        },
        fontFamily: {
            display: ["Syne", "sans-serif"],
            body: ["Inter", "monospace"],
        },
    },
    plugins: [],
};
