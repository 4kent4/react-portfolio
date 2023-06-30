import soundsurge from "../assets/soundsurge.png";

import goalsetter from "../assets/goal-setter.png";
import dalle from "../assets/dalle.png";
import airbnb from "../assets/Airbnb.png";
import styledup from "../assets/styledup.png";

const portfolios = [
	{
		id: 1,
		src: goalsetter,
		des: "A simple goal setter application Built with MongoDB, Express, React, and Node.js. Deployed using Render and Netlify",
		href: "https://github.com/4kent4/Mern-goal-setter",
		demo: "https://mern-goal-setter.netlify.app/",
	},
	{
		id: 2,
		src: soundsurge,
		des: "Modern and stylish Ecommerce landing page demo website, designed with a focus on  responsiveness. Built using ReactJS and CSS Deployed using Githubpage",
		href: "https://github.com/4kent4/sound-surge-landing-page",
		demo: "https://4kent4.github.io/sound-surge-landing-page/",
	},
	{
		id: 3,
		src: dalle,
		des: "Developed using VITE, MERN stack OpenAI API Tailwind CSS. Deployed using Render and Netlify",
		href: "https://github.com/4kent4/DALL-E-Clone",
		demo: "https://kent-dall-e-clone.netlify.app/",
	},
	{
		id: 4,
		src: airbnb,
		des: "A Full Stack Airbnb Clone developed using Next.js 13, Typescript, Tailwind, Prisma, MongoDB, NextAuth",
		href: "https://github.com/4kent4/Airbnb-clone",
		demo: "https://rental-web-app.vercel.app/",
	},
	{
		id: 4,
		src: styledup,
		des: "A still work in progress full stack Ecommerce website",
		href: "https://github.com/4kent4/styleup-mern-ecommerce",
		demo: "https://styledup-ecommerce.netlify.app/",
	},
];

export default portfolios;
