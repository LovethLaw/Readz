import PropTypes from 'prop-types';
import styles from './books.module.css';

const Book = ({ endDate, description, author, image }) => {
	return (
		<div className={styles.book}>
			<img src={image} alt={name} className={styles.bookImg} />
			<div>
				<p>
					Author: <span className={styles.author}>{author}</span>
				</p>
				<p>Desc: {description}</p>
				<p>End Date: {new Date(endDate).toDateString()}</p>
			</div>
		</div>
	);
};

// Define prop types for validation
Book.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired, // Added image validation
	endDate: PropTypes.string.isRequired,
};

// Default props
Book.defaultProps = {
	description: 'No description available',
	author: 'Unknown author',
	image: 'default-image-url.jpg',
};

const Books = ({ content }) => {
	return (
		<div className={styles.books}>
			{content.map((eachBook) => (
				<Book
					key={eachBook.id}
					name={eachBook.title}
					description={eachBook.description}
					author={eachBook.author}
					image={eachBook.book_url}
					endDate={eachBook.endDate}
				/>
			))}
		</div>
	);
};

export default Books;
