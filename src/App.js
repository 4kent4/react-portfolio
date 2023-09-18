import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {
	return (
		<div className="bg-transparent z-10 tracking-wide font-light overflow-x-hidden">
			<NavBar />

			<Home />
			<About />
			<Portfolio />
			<Certificates/>
			<Skills />
			<Contact />
			<Footer />

			<SocialLinks />
		</div>
	);
};

export default App;
