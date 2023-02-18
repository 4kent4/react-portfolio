import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/resume.pdf";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={25} />
				</>
			),
			href: "https://www.linkedin.com/in/kent-fortich-745b3b115/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={25} />
				</>
			),
			href: "https://github.com/4kent4",
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={25} />
				</>
			),
			href: "mailto:kentfortich.ccs@gmail.com",
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={25} />
				</>
			),
			href: cv,
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
		<div className=" bottom-[3%] flex-col lg:top-[35%] left-0 md:top-[75%] fixed">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-36 h-9 lg:h-14 px-3 md:h-10 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gradient-to-r from-yellow-300 to-yellow-600 " +
							" " +
							style
						}
					>
						<a
							href={href}
							className="flex justify-between items-center w-full text-black"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
