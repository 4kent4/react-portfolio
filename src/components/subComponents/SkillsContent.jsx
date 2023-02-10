import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";
import SkillsData from "./SkillsData";

const SkillsContent = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				scale: 1,
				transition: { duration: 0.4 },
			});
		}
		if (!inView) {
			controls.start({
				opacity: 0,
				scale: 0,
				transition: { duration: 0.4 },
			});
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
		>
			{SkillsData.map(({ title, id, src, style }) => (
				<motion.div
					layout
					animate={controls}
					key={id}
					className={`shadow-md py-2 rounded-lg ${style}`}
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
				>
					<img src={src} alt="" className="w-20 mx-auto" />
					<p className="mt-4">{title}</p>
				</motion.div>
			))}
		</div>
	);
};
export default SkillsContent;
