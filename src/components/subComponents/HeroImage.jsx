import Mypic from "../../assets/Me.png";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroImage = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.8,
				},
			});
		}
		if (!inView) {
			controls.start({
				scale: 0,
				opacity: 0,
				transition: {
					duration: 0.8,
				},
			});
		}
	}, [inView]);

	return (
		<div ref={ref}>
			<motion.div
				initial={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
				animate={controls}
				className="p-6 md:p-0"
			>
				<img src={Mypic} alt="Me" className="rounded-2xl mx-auto w-3/4" />
			</motion.div>
		</div>
	);
};
export default HeroImage;
