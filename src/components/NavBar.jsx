import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
	const [navbar, setNavbar] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "Skills",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<div className="flex justify-between items-center w-full h-20 px-4 z-50 text-white bg-transparent fixed">
			<div>
				<h1 className="text-yellow-400 text-4xl font-signature ml-2">Kent</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200"
					>
						{link}
					</li>
				))}
			</ul>
			<div
				onClick={() => setNavbar(!navbar)}
				className="cursor-pointer px-4 z-10 text-gray-500 md:hidden"
			>
				{navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{navbar && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="py-6 cursor-pointer font-medium capitalize text-gray-500 text-4xl hover:scale-105 duration-200"
						>
							{link}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
export default NavBar;
