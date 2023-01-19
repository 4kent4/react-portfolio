import Me from "../assets/Me.png";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: Me,
			href: "https://github.com/4kent4",
		},
		{
			id: 2,
			src: Me,
			href: "https://github.com/4kent4",
		},
		{
			id: 3,
			src: Me,
			href: "https://github.com/4kent4",
		},
		{
			id: 4,
			src: Me,
			href: "https://github.com/4kent4",
		},
		{
			id: 5,
			src: Me,
			href: "https://github.com/4kent4",
		},
		{
			id: 6,
			src: Me,
			href: "https://github.com/4kent4",
		},
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, href }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105"
							/>
							<div className="flex items-center justify-center">
								<a
									href={href}
									target="_blank"
									rel="noreferrer"
									className="w-1/2 px-6 py-3 duration-200 hover:scale-105 flex justify-center"
								>
									Demo
								</a>
								<a
									href={href}
									target="_blank"
									rel="noreferrer"
									className="w-1/2 px-6 py-3 duration-200 hover:scale-105 flex justify-center"
								>
									Code
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Portfolio;
