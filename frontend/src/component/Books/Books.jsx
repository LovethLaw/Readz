import PropTypes from 'prop-types';
import { books } from './all_books';
import styles from './books.module.css';

const Book = ({ name, description, author, image }) => {
	return (
		<div className={styles.book}>
			<img src={image} alt={name} className={styles.bookImg} />
			<div>
				<h2>{name}</h2>
				<p> {description}</p>
				<p>{author}</p>
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
};

// Default props
Book.defaultProps = {
	description: 'No description available',
	author: 'Unknown author',
	image: 'default-image-url.jpg',
};

const Books = ({ content }) => {
	console.log(content);
	return (
		<div className={styles.books}>
			{content.map((eachBook) => (
				<Book
					key={eachBook.id}
					name={eachBook.title}
					description={eachBook.description}
					author={eachBook.author}
					image={eachBook.book_url}
				/>
			))}
		</div>
	);
};

export default Books;
