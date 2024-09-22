import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(
		window.innerWidth < 1024
	); // Tablet and below

	useEffect(() => {
		const handleResize = () => {
			setIsMobileOrTablet(window.innerWidth <= 1024); // Update state based on screen width
		};

		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{!isMobileOrTablet ? (
				<div className='main'>
					<h1>
						Sorry, this app is only available on mobile or tablet devices.
					</h1>
					<p>
						Please visit the site on a mobile or tablet device to access the
						content.
					</p>
				</div>
			) : (
				<div className='main'>
					{/* Your mobile-only app goes here */}
					<h1>Readz is under Construction... </h1>
					<div className='spinner-container '>
						<div className='spinner'></div>
					</div>
				</div>
			)}
		</>
	);
};

export default App;
