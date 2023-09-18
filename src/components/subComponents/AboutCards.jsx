import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutCards = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [inView, controls]);

	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.4,
			},
		},
		hidden: {
			opacity: 0,
			y: 50,
		},
	};

	const aquiredSkills = [
		{
			id: 1,
			title: "Flexible Responsive Design",
			content:
				"Skilled in creating responsive and dynamic layouts that adapt to different screen sizes and devices. This means that your website will look great and be easy to use on any device, whether it's a desktop computer, tablet, or smartphone.",
		},
		{
			id: 2,
			title: "User-Friendly CRUD Operations",
			content:
				"Well-versed in creating basic CRUD (Create, Read, Update, Delete) operations that allow for seamless data management in web applications. This means that I can create functional and easy-to-use interfaces for managing data on your website.",
		},
		{
			id: 3,
			title: "Basic MERN Stack Skills",
			content:
				"As a beginner MERN stack developer, I possess the skills to create full-stack web applications using MongoDB, Express.js, React, and Node.js, allowing me to develop robust and scalable web apps. With a solid foundation in front-end technologies.",
		},
		{
			id: 4,
			title: "Interactive Animation",
			content:
				"Knowledgeable in using Framer Motion to create engaging and interactive animations that enhance the user experience and bring your website to life.",
		},
	];
	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={controls}
			className="w-full h-full mt-14 grid grid-cols-1 md:grid-cols-2 py-8 gap-8 md:gap-6"
		>
			{aquiredSkills.map(({ id, title, content }) => (
				<motion.div
					key={id}
					variants={variants}
					className="p-6 rounded-md bg-[#1B1B1B] shadow-md hover:shadow-white duration-500 cursor-pointer"
				>
					<div className="mb-6 text-2xl text-center text-yellow-500 h-12">
						<p>{title}</p>
					</div>
					<div className="text-xl p-4">
						<p>{content}</p>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};
export default AboutCards;
