import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Register from './component/register/register';
import Login from './component/Login/Login';
import AddBook from './component/AddBook/addbook';
import Notifications from './Notifications/Notifications';
import Profile from './component/Profile/profile';
import LogoLoad from './component/Home/Home';

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
				//! do not touch

				<div className='main desktop'>
					<h1>Sorry, this app is only available on mobile</h1>
					<p>Please visit the site on a mobile</p>
				</div>
			) : (
				// ! start here
				<div className='main'>
					{/* Your mobile-only app goes here */}
					<Routes>
						<Route path='/' element={<LogoLoad />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/notification' element={<Notifications />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/addBook' element={<AddBook />} />
						<Route path='*' element={<h1>NOT FOUND 404</h1>} />
					</Routes>
				</div>
			)}
		</>
	);
};

export default App;
