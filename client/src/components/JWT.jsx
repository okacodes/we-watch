import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from 'axios';
import Button1 from './Button1.jsx';

const JWT = () => {
	const [token, setToken] = useState('')
	const [userData, setUserData] = useState({})

	useEffect(() => {
		const token = Cookies.get('jwt-token')
		setToken(token)

		// The following post request is meant to check if the user is authorized. It will be used in a later implementation.

		//axios({
		//	method: 'post',
		//	headers: {
		//		'Content-Type': 'application/x-www-form-urlencoded',
		//		'jwt-token': token,
		//	},
		//	url: 'http://localhost:3000/api/checkauth'
		//})
	}, [])
	//.then((res) => {
	//		setUserdata(res.data)
	//	}, [])

	const logout = () => {
		setToken('')
		localStorage.removeItem('jwt-token')
	}
	if (!token) {
		return (
			<div>
				<h1>NOT AUTHORIZED</h1>
			</div>
		)
	}

	return (
		<div>
			<h1>Welcome to the Dashboard!</h1>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default JWT;
