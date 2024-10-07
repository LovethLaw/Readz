import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();

	// State to handle form data
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const [isLoading, setIsLoading] = useState(false);
	// Handle input change for all fields
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// try {
		// 	// Send a POST request to the backend API
		// 	const response = await axios.post(
		// 		'https://your-backend-api/login',
		// 		formData
		// 	);

		// 	if (response.status === 200) {
		// 		// Navigate to home/dashboard page upon successful login
		// 		navigate('/dashboard');
		// 	}
		// } catch (error) {
		// 	console.error('Login failed:', error);
		// 	// Handle login error (e.g., show an error message to the user)
		// }
		setTimeout(() => {
			navigate('/dashboard');
		}, 5000);
	};

	return (
		<div className={`${styles.wrapper}`}>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<h1>Sign In</h1>
					<div className={`form ${styles.inputbox}`}>
						<input
							type='email'
							name='email'
							placeholder='Email'
							required
							value={formData.email}
							onChange={handleChange}
						/>
						<FaUser className={styles.icon} />
					</div>
					<div className={`form ${styles.inputbox}`}>
						<input
							type='password'
							name='password'
							placeholder='Password'
							required
							value={formData.password}
							onChange={handleChange}
						/>
						<FaLock className={styles.icon} />
					</div>

					<div className={`form ${styles.rememberforgot}`}>
						<label>
							<input
								type='checkbox'
								name='rememberMe'
								checked={formData.rememberMe}
								onChange={handleChange}
							/>
							Remember me
						</label>
						<Link to='#'>Forgotten Password?</Link>
					</div>

					<button type='submit' disabled={isLoading}>
						{isLoading ? 'Signing in...' : 'Sign in'}
					</button>

					<div className={styles.registerlink}>
						<p>Don't have an account?</p>
						<Link to='/register'>Sign Up</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
