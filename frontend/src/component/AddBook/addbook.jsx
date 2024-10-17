import { useState } from 'react';
import styles from './addbook.module.css';
// import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Token from '@mui/icons-material/Token';

function Addbook() {
	const navigate = useNavigate();
	// State to handle form inputs
	const [formData, setFormData] = useState({
		title: '',
		author: '',
		description: '',
		coverImage: '',
		startDate: '',
		finishDate: '',
	});

	// Handle input changes
	const handleChange = (e) => {
		e.preventDefault();
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		// Add your form submission logic here

		try {
			// Send a POST request to the backend API
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'http://localhost:8001/api/v1/books/create-book',

				formData,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			console.log(response);
			if (response.status === 201) {
				// Redirect to Dashboard Page
				navigate('/dashboard');
			}
		} catch (error) {
			console.error('Error Creating book:', error);
			// Handle error, e.g., show a message to the user
		}
	};

	return (
		<>
			<div className={styles.container}>
				<h1>Add Book</h1>
				<form onSubmit={handleSubmit} noValidate>
					{/* Title */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='title'
							value={formData.title}
							placeholder='Title'
							required
							onChange={handleChange}
						/>
					</div>

					{/* Author */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='author'
							value={formData.author}
							placeholder='Author'
							required
							onChange={handleChange}
						/>
					</div>

					{/* Cover Image */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='coverImage'
							value={formData.coverImage}
							placeholder='Book Image Url'
							required
							onChange={handleChange}
						/>
					</div>

					{/* Description */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='description'
							value={formData.description}
							placeholder='Description'
							required
							onChange={handleChange}
						/>
					</div>

					{/* Start Date */}
					<div className={styles.inputbox}>
						<label htmlFor='startDate'>Start Date</label>
						<input
							type='date'
							name='startDate'
							value={formData.startDate}
							placeholder='Date Read'
							required
							onChange={handleChange}
							min='1997-01-01'
							max='2030-12-31'
						/>
					</div>

					{/* Finish Date */}
					<div className={styles.inputbox}>
						<label htmlFor='finishDate'>Finsh Date</label>

						<input
							type='Date'
							name='finishDate'
							value={formData.finishDate}
							placeholder='Finish Date'
							required
							onChange={handleChange}
							min='1997-01-01'
							max='2030-12-31'
						/>
					</div>

					{/* Submit Button */}
					<button type='submit'>Add Book</button>
				</form>
			</div>

			<div className={styles.footer}>
				<Footer />
			</div>
		</>
	);
}

export default Addbook;
