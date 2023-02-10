import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactTextContent = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.1,
				},
			});
		} else {
			controls.start({
				x: "100vw",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_quyqzyg",
			"template_kir3odk",
			form.current,
			"2oNPolvN1sNiSAxsy"
		);
		e.target.reset();
	};

	return (
		<div ref={ref} className="w-3/4 md:w-1/2">
			<motion.div animate={controls} className="w-ful h-full">
				<p className="text-2xl text-yellow-500 mb-2">
					Let's connect and create something great together.
				</p>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="h-full flex flex-col gap-2"
				>
					<p>Name:</p>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						className="text-black rounded-lg border-0 p-2 outline-none"
					/>

					<p>Email:</p>
					<input
						type="email"
						name="email"
						placeholder="ex:johndoe@gmail.com"
						className="text-black rounded-lg border-0 p-2 outline-none"
					/>
					<p>Message:</p>
					<textarea
						type="text"
						name="message"
						className="h-20 text-black rounded-lg border-0 p-2 outline-none resize-none"
					/>
					<button
						type="submit"
						className=" text-black w-fit px-6 py-3 my-2 items-center rounded-md cursor-pointer bg-yellow-500 hover:bg-black hover:text-white duration-300"
					>
						Submit
					</button>
				</form>
			</motion.div>
		</div>
	);
};
export default ContactTextContent;
