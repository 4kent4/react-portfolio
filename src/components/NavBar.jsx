import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import nice from "../assets/nice.png";

const NavBar = () => {
	const [navbar, setNavbar] = useState(false);
	const [navActive, setNavActive] = useState(1);
	console.log(navActive);

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
			link: "certificates",
		},
		{
			id: 5,
			link: "skills",
		},
		{
			id: 6,
			link: "contact",
		},
	];

	return (
		<nav className="flex justify-between items-center w-screen h-20 px-4 z-50 text-white bg-[#1b1b1b] fixed">
			<a
				href="#home"
				className="h-10 w-10 ml-10 rounded-sm cursor-pointer"
				onClick={() => setNavActive(1)}
			>
				<img src={nice} alt="nice" className=" rounded-sm" />
			</a>

			<div className="hidden md:flex">
				{links.map(({ id, link }) => (
					<a
						href={`#${link}`}
						onClick={() => setNavActive(id)}
						key={id}
						className={`p-2 w-28 rounded-sm items-center text-center cursor-pointer font-medium capitalize ${`hover:bg-gray-500 hover:text-white duration-500`} duration-5000 ${
							navActive === id
								? " text-black bg-gradient-to-r from-yellow-300 to-yellow-600 duration-500"
								: "text-gray-400"
						}`}
					>
						{link}
					</a>
				))}
			</div>
			<div
				onClick={() => setNavbar(!navbar)}
				className="cursor-pointer px-4 z-10 text-gray-500 md:hidden"
			>
				{navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{navbar && (
				<motion.div
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/4 h-screen bg-gradient-to-b from-black to-gray-800 md:hidden"
				>
					{links.map(({ id, link }) => (
						<a
							href={`#${link}`}
							onClick={() => setNavActive(id)}
							key={id}
							className={`py-6 w-full text-center rounded-lg cursor-pointer font-medium capitalize md:text-2xl ${`hover:bg-gray-500 hover:text-white duration-500`} duration-200 ${
								navActive === id
									? " text-black bg-gradient-to-r from-yellow-300 to-yellow-600 duration-500"
									: "text-gray-400"
							}`}
						>
							{link}
						</a>
					))}
				</motion.div>
			)}
		</nav>
	);
};
export default NavBar;
