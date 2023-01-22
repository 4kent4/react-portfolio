import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutIntro = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (!inView) {
			controls.start({
				x: "-100vw",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.1,
				},
			});
		} else {
			controls.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);

	return (
		<div ref={ref} className="w-full h-full">
			<motion.div animate={controls} className="pb-8">
				<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
					About
				</p>

				<p className="text-xl mt-20">
					Hello! My name is <span>Kent M. Fortich</span>. I have been interested
					in building refined digital web experiences with a focus on responsive
					and interactive content.
				</p>

				<br />

				<p className="text-xl">
					I graduated with a bachelor's degree in
					<span>Computer Science</span> at Lyceum of the Philippines Batangas.
					Currently, I'm seeking for an entry level position to start my journey
					in the realm of
					<span> Web Development</span> field.
				</p>
			</motion.div>
		</div>
	);
};
export default AboutIntro;
