import styles from './dashboard.module.css';
import { useState, useEffect } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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

				console.log(response);
			} catch (error) {
				if (error.status === 404 || error.status === 500) {
					navigate('/login');
				}
				// Handle error appropriately (e.g., show an error message to the user)
			} finally {
				setLoading(false);
			}
		};

		fetchBooks();
	}, [navigate]);

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
