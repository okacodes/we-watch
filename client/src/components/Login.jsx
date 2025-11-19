import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button1 from './Button1.jsx';

const Login = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		username: "",
		password: ""
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			username: data.username,
			password: data.password
		}
		axios({
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			url: 'http://localhost:3000/api/login',
			data: userData
		})
		.then((res) => {
			localStorage.setItem('jwt-token', res.data.token)
			alert('Success?')
			navigate('/dashboard')
		})
		.catch((err) => {
			alert('Failure.')
			console.log(err)
		})
	}

	return (
		<div className="formContainer">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className="form">
				<label htmlFor="username" className="formField">
					Username:
					<input
						className="formInput"
						type="text"
						name="username"
						value={data.username}
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="password" className="formField">
					Password:
					<input
						className="formInput"
						type="password"
						name="password"
						value={data.password}
						onChange={handleChange}
						required
					/>
				</label>
				<Button1>
					Login
				</Button1>
			</form>
		</div>
	)
}

export default Login;

