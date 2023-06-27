/** @format */

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Effect = () => {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);

	return (
		<div className='w-full h-full absolute top-0 left-0 -z-50'>
			<Particles
				className='w-full h-screen'
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fullScreen: false,
					background: {
						// color: {
						//   value: "#0d47a1",
						// },
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",

								distance: 400,
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 150,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#32A99A",
						},
						links: {
							color: "#32A99A",
							distance: 120,
							enable: true,
							opacity: 0.6,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							directions: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 3,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 1200,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 2 },
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default Effect;
