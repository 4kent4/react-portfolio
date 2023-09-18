import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useEffect, useState} from "react";
import Carousel from "./subComponents/Carousel";
import { certificates } from "../constants/PortfolioData";

const Certificates = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimationControls();
  
  const [onToggle, setOnToggle] = useState(true)

	
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
			x: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.4,
			},
		},
		hidden: {
			opacity: 0,
			x: 100,
		},
  };
  

  return (
    <div
			id="certificates"
      className="bg-transparent w-full text-white h-full py-20">
      <div className="max-w-screen-md p-4 mx-auto mt-10 flex flex-col justify-center w-full h-full">

      <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className=" px-12 sm:px-0"
      >
      <div className="pb-8 text-center">
					<button className="text-4xl p-4 rounded-sm text-white hover:text-blue-500 shadow-md hover:shadow-white inline duration-500 cursor-pointer" onClick={() => setOnToggle(!onToggle)}>
						Certificates
					</button>
				</div>

      
        <Carousel>
        {certificates.map((imageUrl, index) => (
          
          <img src={imageUrl} key={index} alt="" className={`rounded-sm ${onToggle ? 'hidden' : ""}`} />
          
        ))}
      </Carousel>
      </motion.div>
  
</div>
      
    </div>
  )
}

export default Certificates