import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
const Footer = () => {
	return (
		<>
			<div className={styles.main}>
				<hr />
				<div className={styles.container}>
					<div>
						<Link to='/dashboard'>
							<HomeIcon className={styles.icons} />
						</Link>
					</div>

					<div>
						<Link to='/profile'>
							<Person2Icon className={styles.icons} />
						</Link>
					</div>

					<div>
						<Link to='/addBook'>
							<AddBoxIcon className={styles.icons} />
						</Link>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
