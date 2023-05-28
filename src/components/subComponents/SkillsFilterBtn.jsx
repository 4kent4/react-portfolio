import { useEffect } from "react";

const BTN = [
	{
		id: 1,
		title: "All",
	},
	{
		id: 2,
		title: "Frontend",
	},
	{
		id: 3,
		title: "Backend",
	},
	{
		id: 4,
		title: "Language",
	},
	{
		id: 5,
		title: "Others",
	},
];

const SkillsFilterBtn = ({
	setFiltered,
	activeSkills,
	activeCategory,
	setActiveCategory,
	activeNav,
	setActiveNav,
}) => {
	useEffect(() => {
		if (activeCategory === "All") {
			setFiltered(activeSkills);
			return;
		}

		const filtered = activeSkills.filter((skills) =>
			skills.category.includes(activeCategory)
		);

		setFiltered(filtered);
	}, [activeCategory, activeSkills]);

	const active = "text-yellow-500 border-b-4 border-yellow-500";

	const changeHandler = (id, title) => {
		setActiveCategory(title);
		setActiveNav(id);
	};

	return (
		<div className="gap-8 mt-10 mb-10 flex justify-between flex-wrap">
			{BTN.map(({ id, title }) => (
				<button
					onClick={() => changeHandler(id, title)}
					className={activeNav === id ? `${active}` : ""}
					key={id}
				>
					{title}
				</button>
			))}
		</div>
	);
};
export default SkillsFilterBtn;
