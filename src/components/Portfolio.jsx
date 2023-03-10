import portfolios from "../constants/PortfolioData";
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

	return (
		<div
			id="portfolio"
			className="bg-transparent w-full text-white h-full py-20"
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
