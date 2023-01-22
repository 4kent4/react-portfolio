import todolist from "../assets/todolist.png";
import soundsurge from "../assets/soundsurge.png";
import connectify from "../assets/connectify.png";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Portfolio = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				scale: 1,
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.1,
				},
			});
		}
		if (!inView) {
			controls.start({
				x: "-100vw",
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);

	const portfolios = [
		{
			id: 1,
			src: todolist,
			href: "https://github.com/4kent4",
			demo: "https://4kent4.github.io/to-do-list/",
		},
		{
			id: 2,
			src: soundsurge,
			href: "https://github.com/4kent4",
			demo: "https://4kent4.github.io/sound-surge-landing-page/",
		},
		{
			id: 3,
			src: connectify,
			href: "https://github.com/4kent4",
			demo: "https://connectify-dbb63.web.app/",
		},
	];

	return (
		<div
			id="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div
					ref={ref}
					className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
				>
					{portfolios.map(({ id, src, href, demo }) => (
						<motion.div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg"
							animate={controls}
						>
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105"
							/>
							<div className="flex items-center justify-center">
								<a
									href={demo}
									target="_blank"
									rel="noreferrer"
									className="w-1/2 px-6 py-3 duration-200 hover:scale-105 flex justify-center"
								>
									Demo
								</a>
								<a
									href={href}
									target="_blank"
									rel="noreferrer"
									className="w-1/2 px-6 py-3 duration-200 hover:scale-105 flex justify-center"
								>
									Code
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Portfolio;
