import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import styles from './register.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Optional, if using axios

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		termsAccepted: false,
	});

	const [isLoading, setIsLoading] = useState();

	// Handle input change for all fields
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value, // For checkbox input
		});
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Send a POST request to the backend API
			const response = await axios.post(
				'http://localhost:8001/api/v1/users/signup',
				formData
			);

			if (response.status === 201) {
				// Redirect to login page on successful registration
				navigate('/login');
			}
		} catch (error) {
			console.error('Error registering user:', error);
			// Handle error, e.g., show a message to the user
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<h1>Sign Up</h1>

					{/* First Name */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='firstName'
							placeholder='First name'
							required
							value={formData.firstName}
							onChange={handleChange} // Handle input change
						/>
						<FaUser className={styles.icon} />
					</div>

					{/* Last Name */}
					<div className={styles.inputbox}>
						<input
							type='text'
							name='lastName'
							placeholder='Last name'
							required
							value={formData.lastName}
							onChange={handleChange}
						/>
						<FaUser className={styles.icon} />
					</div>

					{/* Email */}
					<div className={styles.inputbox}>
						<input
							type='email'
							name='email'
							placeholder='Email address'
							required
							value={formData.email}
							onChange={handleChange}
						/>
						<FaEnvelope className={styles.icon} />
					</div>

					{/* Password */}
					<div className={styles.inputbox}>
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

					{/* Terms & Conditions */}
					<div className={styles.termsandcondition}>
						<label>
							<input
								type='checkbox'
								name='termsAccepted'
								required
								checked={formData.termsAccepted}
								onChange={handleChange}
							/>
							I agree to terms & conditions
						</label>
					</div>

					{/* Submit Button */}
					<button type='submit' disabled={isLoading}>
						{isLoading ? 'Loading......' : 'Sign Up'}
					</button>

					{/* Login Link */}
					<div className={styles.registerlink}>
						<p>Already have an account?</p>
						<Link to='/login'>Login</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
