import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import axios from 'axios';
import Test from './components/Test.jsx'

import './App.css'

const App = () => {
	return (
		<Router>
			<div>
				<u>
					<li><Link to="/test">Link Test</Link></li>
				</u>
			</div>	
				
			<Routes>
				<Route path='/test' element={<Test />} />
			</Routes>
		</Router>
	);
};

export default App;
