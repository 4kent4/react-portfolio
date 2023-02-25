import soundsurge from "../assets/soundsurge.png";
import connectify from "../assets/connectify.png";
import goalsetter from "../assets/goal-setter.png";
import dalle from "../assets/dalle.png";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Portfolio = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [inView]);

	const variants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.4,
			},
		},
		hidden: {
			opacity: 0,
			x: 100,
		},
	};

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
			src: connectify,
			des: "Connectify is a LinkedIn clone built with React, Redux, Material-UI, and Firebase. Deployed using Firebase",
			href: "https://github.com/4kent4/Connectify",
			demo: "https://connectify-dbb63.web.app/",
		},
		{
			id: 4,
			src: dalle,
			des: "Developed using VITE, MERN stack OpenAI API Tailwind CSS. Deployed using Render and Netlify",
			href: "https://github.com/4kent4/DALL-E-Clone",
			demo: "https://kent-dall-e-clone.netlify.app/",
		},
	];

	return (
		<div
			id="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full py-20"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<motion.div
					ref={ref}
					variants={variants}
					initial="hidden"
					animate={controls}
					className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0"
				>
					{portfolios.map(({ id, src, href, demo, des }) => (
						<motion.div
							key={id}
							className="shadow-md shadow-gray-400 rounded-lg"
							variants={variants}
						>
							<div className="relative">
								<img src={src} alt="" className="rounded-md" />
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
									className="absolute bg-[#202124] right-1 left-1 bottom-1 rounded-lg md:h-1/2 p-4 text-[10px] md:text-[16px]"
								>
									<p>{des}</p>
								</motion.div>
							</div>
							<div className="flex items-center justify-evenly h-18">
								<a
									href={demo}
									target="_blank"
									rel="noreferrer"
									className=" text-black w-fit px-6 py-3 my-2 items-center rounded-md cursor-pointer bg-yellow-500 hover:bg-black hover:text-white duration-300"
								>
									Demo
								</a>
								<a
									href={href}
									target="_blank"
									rel="noreferrer"
									className=" text-black w-fit px-6 py-3 my-2 items-center rounded-md cursor-pointer bg-yellow-500 hover:bg-black hover:text-white duration-300"
								>
									Code
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};
export default Portfolio;
