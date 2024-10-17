import styles from './Header.module.css';
import axios from 'axios';
import { Avatar } from '@mui/material';
import { useState } from 'react';

const Header = () => {
	const [name, setName] = useState('');

	const fetchName = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(
				'http://localhost:8001/api/v1/users/profile',
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			// setBooks(response.data.data.books);

			setName(response.data.data.firstName);
		} catch (error) {
			console.log(error); // Handle error appropriately (e.g., show an error message to the user)
		}
	};

	fetchName();

	return (
		<div className={styles.headerContainer}>
			<div className={styles.profileImg}>
				<Avatar
					sx={{
						width: 56, // Custom width
						height: 56, // Custom height
						bgcolor: 'primary.main', // Background color
						color: 'white', // Text color for initials (if no image is provided)
						fontSize: 24, // Font size for initials
						border: '2px solid white', // Optional border
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow,
						marginBottom: '10px',
					}}>
					{name.slice(0, 1)}
				</Avatar>
				<h3>{name}</h3>
			</div>
			<h1 className={styles.heading}>My Library</h1>
		</div>
	);
};

export default Header;
