import { BsArrowRight } from "react-icons/bs";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroContex = () => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				scale: 1,
				transition: {
					type: "spring",
					duration: 0.5,
					bounce: 0.1,
				},
			});
		}
		if (!inView) {
			controls.start({
				x: "-100vw",
				scale: 0,
				transition: {
					type: "spring",
					duration: 0.5,
					bounce: 0.1,
				},
			});
		}
	});

	return (
		<div ref={ref}>
			<motion.div
				className="flex flex-col justify-center h-full"
				animate={controls}
			>
				<h2 className="text-5xl md:text-7xl font-bold text-white">
					I'm a Front-end Web Developer
				</h2>
				<p className="text-gray-500 py-4 max-w-md">
					I love to work on web application using technologies like tailwind,
					FramerMotion and MERN stack.
				</p>
				<div className="flex md:justify-center lg:justify-start">
					<button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-yellow-600 cursor-pointer">
						Portfolio
						<span className="group-hover:rotate-90 duration-300">
							<BsArrowRight size={20} className="ml-1" />
						</span>
					</button>
				</div>
			</motion.div>
		</div>
	);
};
export default HeroContex;