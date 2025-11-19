import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import axios from 'axios';
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/dashboard.jsx'

import './App.css'
import './Reset.css'
import './Normalize.css'

const App = () => {
	return (
		<Router>
			<div>
				<header className="header">
					<ul className="headerList">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/register">Register</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/dashboard">Dashboard</Link></li>
					</ul>
				</header>
			</div>	
				
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
