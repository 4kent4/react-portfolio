import ContactDetailsContent from "./subComponents/ContactDetailsContent";

import ContactTextContent from "./subComponents/ContactTextContent";

const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full h-full md:h-screen bg-transparent text-white py-20"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="w-full h-full">
					<p className="text-4xl inline border-b-4 border-yellow-500">
						Contact
					</p>
					<div className="flex flex-col md:flex-row h-4/5 items-center mt-10">
						<ContactDetailsContent />
						<ContactTextContent />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
