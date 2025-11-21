import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from 'axios';
import Button1 from './Button1.jsx';

const Dashboard = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({})
	const [authorized, setAuthorized] = useState(null)

	useEffect(() => {
		// The following post request is meant to check if the user is authorized. It will be used in a later implementation.
		axios({
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			url: 'http://localhost:3000/api/checkauth',
			withCredentials: true
		})
		.then(() => {
				setAuthorized(true)
				//Will add
				//setuserData(res.data.user)
			})
		.catch(() => {
				setAuthorized(false)
			})
	}, [])
	//.then((res) => {
	//		setUserdata(res.data)
	//	}, [])

	const logout = () => {
		navigate('/')
		setToken('')
		localStorage.removeItem('jwt-token')
	}
	if (!authorized) {
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

export default Dashboard;
