import React from 'react'
import './ServicesNavigation.css'
const ServicesNavigation = () => {
	return(
		<div>
			<nav>
				<div className="hamburger">
					<div className="line"></div>
					<div className="line"></div> 
					<div className="line"></div>
				</div>
				<ul className="nav-links">
					<li><a href="/services">About</a></li>
					<li><a href="/services">Contacts</a></li>
					<li><a href="/services">Projects</a></li>
				</ul>
			</nav>
			{/*<section className="landing">
				<img src="./circles.svg" alt="dots" />
				<h1>Dots</h1>
			</section>*/}
		</div>
	);
}

export default ServicesNavigation;