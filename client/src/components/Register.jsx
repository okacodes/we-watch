import React, { useState } from 'react';
import axios from 'axios';
import Button1 from './Button1.jsx'

const Register = () => {
	const [data, setData] = useState({
		name: "",
		email: ""
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
			url: 'http://localhost:3000/api/signup',
			data: userData
		}).then((res) => {
				console.log(res.status, res.data.token)
			})

		//axios.post("http://localhost:3000/api/signup", userData)
		//.then((res) => {
		//		console.log(res.status, res.data.token)
		//	})
	}

	return (
		<div className="registerContainer">
			<h1>Register</h1>
			<form onSubmit={handleSubmit} className="registerForm">
				<label htmlFor="username" className="registerFormField">
					Username:
					<input
						className="registerFormInput"
						type="text"
						name="username"
						value={data.username}
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="password" className="registerFormField">
					Password:
					<input
						className="registerFormInput"
						type="password"
						name="password"
						value={data.password}
						onChange={handleChange}
						required
					/>
				</label>
				<Button1>
					Register
				</Button1>
			</form>
		</div>
	)
}

export default Register;
