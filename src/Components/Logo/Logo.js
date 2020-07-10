import React from 'react';
import logo from './react.svg'
import './Logo.css'
import Tilt from 'react-tilt'
const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner"> 
			 		<img className='logo center' src={logo} alt='logo'/>
			 	</div>
			</Tilt>
		</div>
	);
}

export default Logo;