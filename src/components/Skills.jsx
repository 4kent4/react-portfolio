import SkillsContent from "./subComponents/SkillsContent";

const Skills = () => {
	return (
		<div
			id="skills"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
		>
			<div className="pt-20 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
				<div>
					<p className="text-4xl inline border-b-4 border-yellow-500">
						Skills
					</p>
				</div>

				<SkillsContent />
			</div>
		</div>
	);
};
export default Skills;
