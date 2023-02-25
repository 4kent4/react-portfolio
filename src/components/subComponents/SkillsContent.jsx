import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";
import SkillsData from "../../constants/SkillsData";

const SkillsContent = () => {
	const { ref, inView } = useInView({ threshold: 0.01 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			const interval = setInterval(() => {
				controls.start("visible");
				console.log("running");
			}, 2000);
			return () => clearInterval(interval);
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [inView]);

	const variants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				staggerChildren: 0.1,
			},
		},
		hidden: {
			opacity: 0,
			scale: 0,
		},
	};

	return (
		<div className="h-full w-full" ref={ref}>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={controls}
				className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
			>
				{SkillsData.map(({ title, id, src, style }) => (
					<motion.div
						variants={variants}
						key={id}
						className={`bg-gradient-to-b from-black to-gray-800 shadow-md py-2 rounded-lg ${style}`}
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					>
						<img src={src} alt="" className="w-20 mx-auto" />
						<p className="mt-4">{title}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
export default SkillsContent;
