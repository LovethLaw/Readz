import { useState, useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './login.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Clear previous errors when navigating to this page
		setErrors([]);
	}, []);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post(
				'http://localhost:8001/api/v1/users/login',
				formData
			);

			if (response.status === 200) {
				localStorage.setItem('token', response.data.token);
				navigate(location.pathname === '/login' ? '/dashboard' : '/', {
					replace: true,
				});
			}
		} catch (error) {
			setErrors(error.response.data.status);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={`${styles.wrapper}`}>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<h1>Sign In</h1>
					{errors}
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
