import styles from './dashboard.module.css';
import Books from '../Books/Books';
import Saved from '../Saved/Saved';
import Header from '../Header/Header';
import Collections from '../Collections/Collections';
import Finished from '../Finished/Finished';
import Downloads from '../Downloads/Download';
import Footer from '../Footer/Footer';

const Dashboard = () => {
	return (
		<>
			<div className={styles.container}>
				<header className='header'>
					<Header />
				</header>
				<main className={styles.main}>
					{/* Saved section 1 */}
					<section>
						<Saved />
					</section>

					{/* Collections section 2  */}

					<section>
						<Collections />
					</section>

					{/* Finished section 3 */}
					<section>
						<Finished />
					</section>

					{/* Downloads section 4 */}

					<section>
						<Downloads />
					</section>
				</main>
				<h1>My History</h1>

				{/*My books record */}

				<div className='books'>
					<Books />
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Dashboard;
