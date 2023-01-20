import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_quyqzyg",
			"template_kir3odk",
			form.current,
			"2oNPolvN1sNiSAxsy"
		);
		e.target.reset();
	};

	const details = [
		{
			icon: (
				<>
					<AiFillHome size={30} className="text-yellow-500" />
				</>
			),
			text1: "Talaibon, Ibaan Batangas.",
			text2: "102 Lipa - Ibaan Rd.",
		},
		{
			icon: (
				<>
					<BsFillTelephoneFill size={30} className="text-yellow-500" />
				</>
			),
			text1: "+63-927-990-6646",
			text2: "+63-963-355-7920",
		},
		{
			icon: (
				<>
					<MdEmail size={30} className="text-yellow-500" />
				</>
			),
			text1: "kentfortich.ccs@gmial.com",
			text2: "Send it here",
		},
	];

	return (
		<div
			name="about"
			className="w-full h-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="w-full h-full">
					<p className="text-4xl font-bold inline border-b-4 border-yellow-500">
						Contact
					</p>
					<div className="flex flex-col md:flex-row h-4/5 items-center mt-10">
						<div className="w-3/4 md:w-1/2">
							{details.map(({ icon, text1, text2 }) => (
								<div className="flex items-center mb-8">
									{icon}

									<div className="ml-4">
										<p className="text-xl">{text1}</p>
										<p className="text-xl">{text2}</p>
									</div>
								</div>
							))}
						</div>
						<div className="w-3/4 md:w-1/2">
							<p className="text-2xl text-yellow-500 mb-2">
								Let's connect and create something great together.
							</p>
							<form
								ref={form}
								onSubmit={sendEmail}
								className="h-full flex flex-col gap-2"
							>
								<p>Name:</p>
								<input
									type="text"
									name="name"
									placeholder="Your Full Name"
									className="text-black rounded-lg border-0 p-2 outline-none"
								/>

								<p>Email:</p>
								<input
									type="email"
									name="email"
									placeholder="ex:johndoe@gmail.com"
									className="text-black rounded-lg border-0 p-2 outline-none"
								/>
								<p>Message:</p>
								<textarea
									type="text"
									name="message"
									className="h-20 text-black rounded-lg border-0 p-2 outline-none resize-none"
								/>
								<button
									type="submit"
									className=" text-black w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-yellow-300 to-yellow-600 cursor-pointer"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
