import styles from './dashboard.module.css';
import { useState, useEffect } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

const Dashboard = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.get(
					'http://localhost:8001/api/v1/users/books',
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				setBooks(response.data.data.books);
			} catch (error) {
				console.error('Error fetching books:', error);
				// Handle error appropriately (e.g., show an error message to the user)
			} finally {
				setLoading(false);
			}
		};

		fetchBooks();
	}, []);

	return (
		<>
			<div className={styles.container}>
				<header>
					<Header />
				</header>

				{loading ? (
					<div>Loading...</div>
				) : books.length === 0 ? (
					<div>No books found.</div>
				) : (
					<div className='books'>
						<Books content={books} />
					</div>
				)}
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Dashboard;
