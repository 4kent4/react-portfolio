import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutIntro = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				scale: 1,
				transition: {
					type: "spring",
					duration: 0.8,
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
					duration: 0.8,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);

	return (
		<div ref={ref} className="w-full h-full">
			<motion.div animate={controls} className="pb-8">
				<p className="text-4xl inline border-b-4 border-yellow-500">
					About
				</p>

				<p className="text-xl mt-20">
					Hello! My name is{" "}
					<span className="text-yellow-500">Kent M. Fortich</span>. I have been
					interested in building refined digital web experiences with a focus on
					responsive and interactive content.
				</p>

				<br />

				<p className="text-xl">
					I graduated with a bachelor's degree in
					<span className="text-yellow-500"> Computer Science</span> at Lyceum
					of the Philippines Batangas. Currently, I'm seeking for an entry level
					position to start my journey in the realm of
					<span className="text-yellow-500"> Web Development</span> field.
				</p>
			</motion.div>
		</div>
	);
};
export default AboutIntro;
