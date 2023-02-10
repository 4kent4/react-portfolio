import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutCards = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				scale: 1,
				transition: { duration: 0.8 },
			});
		}
		if (!inView) {
			controls.start({
				opacity: 0,
				scale: 0,
				transition: { duration: 0.8 },
			});
		}
	}, [inView]);

	const aquiredSkills = [
		{
			id: 1,
			title: "Flexible Responsive Design",
			content:
				"Skilled in creating responsive and dynamic layouts that adapt to different screen sizes and devices. This means that your website will look great and be easy to use on any device, whether it's a desktop computer, tablet, or smartphone.",
		},
		{
			id: 2,
			title: "Scalable MERN Stack Development",
			content:
				"Proficient in creating full-stack web applications using the MERN (MongoDB, Express.js, React, and Node.js) stack. This means that I can create powerful and efficient web apps that can handle large amounts of data and provide a seamless user experience.",
		},
		{
			id: 3,
			title: "Interactive Animation",
			content:
				"Knowledgeable in using Framer Motion to create engaging and interactive animations that enhance the user experience and bring your website to life.",
		},
		{
			id: 4,
			title: "User-Friendly CRUD Operations",
			content:
				"Well-versed in creating basic CRUD (Create, Read, Update, Delete) operations that allow for seamless data management in web applications. This means that I can create functional and easy-to-use interfaces for managing data on your website.",
		},
	];
	return (
		<div
			ref={ref}
			className="w-full h-full mt-14 grid grid-cols-1 md:grid-cols-2 py-8 gap-8 md:gap-6"
		>
			{aquiredSkills.map(({ id, title, content }) => (
				<motion.div
					animate={controls}
					key={id}
					className="p-4 rounded-lg shadow-md shadow-gray-400"
				>
					<div className="mb-6 text-2xl text-center text-yellow-500 h-12">
						<p>{title}</p>
					</div>
					<div className="text-xl p-4">
						<p>{content}</p>
					</div>
				</motion.div>
			))}
		</div>
	);
};
export default AboutCards;
