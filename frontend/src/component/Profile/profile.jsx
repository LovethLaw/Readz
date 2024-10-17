import setting from '../../assets/setting-icon.png';
import styles from './Profile.module.css';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true); // Loading state to handle asynchronous request
	const [error, setError] = useState(null); // Error state to handle errors

	useEffect(() => {
		let isMounted = true; // Track whether the component is mounted

		const fetchProfile = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.get(
					'http://localhost:8001/api/v1/users/profile',
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);

				if (isMounted) {
					setProfile(response.data.data);
					setLoading(false); // Set loading to false once data is fetched
				}
			} catch (error) {
				if (isMounted) {
					setError('Failed to fetch profile'); // Handle error
					setLoading(false);
				}
			}
		};

		fetchProfile();

		return () => {
			isMounted = false; // Cleanup function to avoid state updates after unmount
		};
	}, []);

	if (loading) {
		return <div>Loading...</div>; // Display loading message while fetching data
	}

	if (error) {
		return <div>{error}</div>; // Display error message if the request fails
	}

	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.profileText}>Profile</h1>
				<img src={setting} alt='src' width={20} className={styles.settingImg} />
			</header>
			<main className={styles.main}>
				<Avatar
					sx={{
						width: 100,
						height: 100,
						bgcolor: 'primary.main',
						color: 'white',
						fontSize: 40,
						border: '2px solid white',
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
						marginBottom: '10px',
					}}>
					{profile.firstName ? profile.firstName[0] : 'U'}
				</Avatar>
				<h2>
					{profile.firstName && profile.lastName
						? `${profile.firstName} ${profile.lastName}`
						: 'User'}
				</h2>
				<p>{profile.email ? profile.email : 'No email provided'}</p>
				<p>
					Created:{' '}
					{profile.createdAt
						? new Date(profile.createdAt).toDateString()
						: 'Date not available'}
				</p>
				<button className={styles.profileBtn}>Edit Profile</button>
				<button onClick={handleLogout} className={styles.logoutBtn}>
					Logout
				</button>
				<Footer />
			</main>
		</div>
	);
};

export default Profile;
