import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";
import SkillsData from "../../constants/SkillsData";
import SkillsFilterBtn from "./SkillsFilterBtn";

const SkillsContent = () => {
	const [activeSkills, setActiveSkills] = useState(SkillsData);
	const [activeCategory, setActiveCategory] = useState("All");
	const [filtered, setFiltered] = useState([]);
	const [activeNav, setActiveNav] = useState("All");

	const { ref, inView } = useInView({ threshold: 0.01 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.3,
				},
			});
		}
		if (!inView) {
			controls.start({
				opacity: 0,
				scale: 0,
				transition: {
					duration: 0.3,
				},
			});
		}
	}, [inView]);

	return (
		<div className="h-100% w-full min-h-screen" ref={ref}>
			<SkillsFilterBtn
				activeSkills={activeSkills}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				setFiltered={setFiltered}
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
				{filtered.map(({ title, id, src, style }) => (
					<motion.div
						layout
						animate={controls}
						key={id}
						className={`bg-[#1b1b1b] shadow-md py-2 rounded-lg ${style} cursor-pointer`}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<img src={src} alt="" className="w-20 mx-auto" />
						<p className="mt-4">{title}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};
export default SkillsContent;
