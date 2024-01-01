import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";


const Particle = () => {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	return (
		<div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					fullScreen: {
						enable: true,
						zIndex: -1,
					},
					particles: {
						number: {
							value: 15,
							density: {
								enable: false,
								value_area: 500,
							},
						},
						color: {
							value: "#ecbe23",
						},
						shape: {
							type: "circle",
							options: {
								sides: 3,
							},
						},
						opacity: {
							value: 0.8,
							random: true,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						size: {
							value: 5,
							random: true,
							anim: {
								enable: true,
								speed: 40,
								size_min: 1,
								sync: false,
							},
						},
						rotate: {
							value: 0,
							random: true,
							direction: "random",
							animation: {
								enable: true,
								speed: 5,
								sync: false,
							},
						},
						line_linked: {
							enable: false,
							distance: 700,
							color: "#f0a400a1",
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 2,
							direction: "none",
							random: true,
							straight: false,
							out_mode: "out",
							attract: {
								enable: true,
								rotateX: 600,
								rotateY: 600,
							},
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: ["repulse","grab"],
							},
							onclick: {
								enable: false,
								mode: "remove",
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: {
								distance: 100,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
					background: {
						color: "#10212a",
						image: '',
						position: "50% 50%",
						repeat: "no-repeat",
						size: "cover",
					},
				}}
			/>
		</div>
	);
};
export default Particle;
