/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			animation: { "spin-slow": "spin 2s linear infinite" },
			fontFamily: {
				headline: ["Gabarito", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
