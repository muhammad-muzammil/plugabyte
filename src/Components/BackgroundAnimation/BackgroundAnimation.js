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
				  	<button type="button" className="btn btn-outline-dark hvr-back-pulse">
				  		Button
				  		<Link to="/services"></Link>
				  	</button>
				  </div>
				</div>
			</div>
		</div>
	);
}
export default Animation;