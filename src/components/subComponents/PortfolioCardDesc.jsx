import { useState } from "react";

const PortfolioCardDesc = ({ des }) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div
			onClick={() => setIsShow(!isShow)}
			className=" absolute top-1 bottom-1 left-1 right-1"
		>
			{isShow && (
				<div className="absolute bg-[#202124] right-1 left-1 bottom-1 rounded-lg md:h-1/2 p-4 text-[10px] md:text-[16px]">
					<p>{des}</p>
				</div>
			)}
		</div>
	);
};
export default PortfolioCardDesc;
