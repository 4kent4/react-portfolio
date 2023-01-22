import HeroImage from "./subComponents/HeroImage";

import HeroTextContent from "./subComponents/HeroTextContent";

const Home = () => {
	return (
		<div
			id="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
				<HeroTextContent />
				<div>
					<HeroImage />
				</div>
			</div>
		</div>
	);
};
export default Home;
