import React from 'react';
import '../App.css'

const Button1 = ({ children }) => {
	return (
		<button type="submit" className="Button1">
			{children}
		</button>
	)
}

export default Button1;
