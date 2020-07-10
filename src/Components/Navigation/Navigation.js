import React from 'react'
import Logo from '../Logo/Logo'
const Navigation = () => {
	return(
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <Logo />
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <a class="nav-link" href="google.com">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="google.com">Features</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="google.com">Pricing</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link disabled" href="google.com">Disabled</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Navigation;