const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
						About
					</p>
				</div>
				<p className="text-xl mt-20">
					Hello! My name is <span>Kent M. Fortich</span>. I have been interested
					in building refined digital web experiences with a focus on responsive
					and interactive content.
				</p>

				<br />

				<p className="text-xl">
					I graduated with a bachelor's degree in
					<span>Computer Science</span> at Lyceum of the Philippines Batangas.
					Currently, I'm seeking for an entry level position to start my journey
					in the realm of
					<span> Web Development</span> field.
				</p>
			</div>
		</div>
	);
};
export default About;
