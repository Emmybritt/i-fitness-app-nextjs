import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontSize: {
				normal: "clamp(18px, 2vmin, 32px)",
				headerText: "clamp(4rem, 8vw, 6rem)",
				bannerText: "clamp(30px, 8vw, 64px)",
				featureText: "clamp(30px, 5vw, 58px)",
				controlTxt: "clamp(16px, 4vw, 36px)",
			},
			screens: {
				mn: "1101px",
			},
		},
	},
	plugins: [],
};
export default config;
