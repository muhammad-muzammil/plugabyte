import React from 'react';
import Logo from '../Logo/Logo'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BackgroundAnimation.css'
const Animation = () => {
	return(
		<div className="main-container">
			<div>
				<div className='slider'>
				  <div className='slide1'></div>
				  <div className='slide2'></div>
				  <div className='slide3'></div>
				  <div className="content principal">
				  	<Logo className="logo" />
				  	<h1>PLUGABYTE</h1>
			  		
			  		<Link to="/services">
			  			<button type="button" className="icon-right signature btn btn-outline-dark hvr-back-pulse">
			  				Button
			  			</button>
			  		</Link>
				  </div>
				</div>
			</div>
		</div>
	);
}
export default Animation;