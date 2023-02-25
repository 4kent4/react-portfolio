import Particle from "./Particles";
import HeroImage from "./subComponents/HeroImage";

import HeroTextContent from "./subComponents/HeroTextContent";

const Home = () => {
	return (
		<div
			id="home"
			className=" h-screen w-full bg-transparent scroll-smooth scrollbar-hide z-10"
		>
			<Particle className="fix top-0 bottom-0 left-0 right-0 m-0 p-0 h-full w-full" />
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white bg-transparent">
				<HeroTextContent />
				<div>
					<HeroImage />
				</div>
			</div>
		</div>
	);
};
export default Home;
