import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactDetailsContent = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const controls = useAnimationControls();

	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 0.8,
					bounce: 0.1,
				},
			});
		} else {
			controls.start({
				x: "-100vw",
				transition: {
					type: "spring",
					duration: 0.8,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);

	const details = [
		{
			id: 1,
			icon: (
				<>
					<AiFillHome size={30} className="text-yellow-500" />
				</>
			),
			text1: "Talaibon, Ibaan Batangas.",
			text2: "102 Lipa - Ibaan Rd.",
		},
		{
			id: 2,
			icon: (
				<>
					<BsFillTelephoneFill size={30} className="text-yellow-500" />
				</>
			),
			text1: "+63-927-990-6646",
			text2: "+63-963-355-7920",
		},
		{
			id: 3,
			icon: (
				<>
					<MdEmail size={30} className="text-yellow-500" />
				</>
			),
			text1: "kentfortich.ccs@gmail.com",
			text2: "Send it here",
		},
	];

	return (
		<div ref={ref} className="w-3/4 md:w-1/2">
			<motion.div animate={controls} className="w-full h-full">
				{details.map(({ id, icon, text1, text2 }) => (
					<div
						key={id}
						className="flex mb-8 flex-col md:flex-row  md:text-left md:gap-4"
					>
						<div className=" h-8 w-8 mb-2 md:mb-0">{icon}</div>

						<div>
							<p className="text-xl">{text1}</p>
							<p className="text-xl">{text2}</p>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};
export default ContactDetailsContent;
