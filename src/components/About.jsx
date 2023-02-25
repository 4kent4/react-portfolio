import AboutCards from "./subComponents/AboutCards";
import AboutIntro from "./subComponents/AboutIntro";

const About = () => {
	return (
		<div
			id="about"
			className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-20"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<AboutIntro />

				<AboutCards />
			</div>
		</div>
	);
};
export default About;
