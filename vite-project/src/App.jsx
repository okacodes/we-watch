import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
	const [foo] = useState([]);
	
	useEffect(() => {
		// Fetch data from Express server
		axios.get('http://localhost:3000/users/testR')
			.then(res => setFoo(res.data))
			.catch(err => console.error(err))
	}, []);

	return (
		<div>
			<h1>Heck yeah React stuff</h1>
			<p>
				{ foo }
			</p>
		</div>
	)
}
