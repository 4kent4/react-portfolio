import css from "../assets/css-logo.png";
import express from "../assets/expressjs-logo.png";
import firebase from "../assets/firebase-logo.png";
import git from "../assets/git-logo.png";
import html from "../assets/html-logo.png";
import js from "../assets/js-logo.png";
import mongo from "../assets/mongoDb-logo.png";
import nodejs from "../assets/nodejs-logo.png";
import react from "../assets/react-logo.png";
import redux from "../assets/redux-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";

const Skills = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				scale: 1,
				transition: { duration: 0.2 },
			});
		}
		if (!inView) {
			controls.start({
				scale: 0,
				transition: { duration: 0.2 },
			});
		}
	}, [inView]);

	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: js,
			title: "JAVASCRIPT",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: git,
			title: "Git",
			style: "shadow-orange-500",
		},
		{
			id: 5,
			src: react,
			title: "React",
			style: "shadow-sky-500",
		},
		{
			id: 6,
			src: tailwind,
			title: "Tailwind",
			style: "shadow-cyan-500",
		},
		{
			id: 7,
			src: redux,
			title: "Redux",
			style: "shadow-purple-500",
		},
		{
			id: 8,
			src: firebase,
			title: "Firebase",
			style: "shadow-yellow-500",
		},
		{
			id: 9,
			src: nodejs,
			title: "Nodejs",
			style: "shadow-green-500",
		},
		{
			id: 10,
			src: express,
			title: "Expressjs",
			style: "shadow-purple-500",
		},
		{
			id: 11,
			src: mongo,
			title: "MongoDB",
			style: "shadow-green-500",
		},
	];
	return (
		<div
			name="Skills"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
		>
			<div className="pt-20 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-yellow-500 p-2 inline">
						Skills
					</p>
				</div>

				<div
					ref={ref}
					className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
				>
					{techs.map(({ title, id, src, style }) => (
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
			</div>
		</div>
	);
};
export default Skills;
