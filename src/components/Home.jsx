import { BsArrowRight } from "react-icons/bs";
import Mypic from "../assets/Me.png";

const Home = () => {
	return (
		<div
			id="#"
			name="home"
			className="h-screen w-full bg-gradient-to-b from-green-800 via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl md:text-7xl font-bold text-white">
						I'm a Front-end Web Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I love to work on web application using technologies like tailwind,
						FramerMotion and MERN stack.
					</p>
					<div className="flex md:justify-center lg:justify-start">
						<button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-yellow-600 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<BsArrowRight size={20} className="ml-1" />
							</span>
						</button>
					</div>
				</div>
				<div>
					<img src={Mypic} alt="Me" className="rounded-2xl mx-auto w-3/4" />
				</div>
			</div>
		</div>
	);
};
export default Home;
