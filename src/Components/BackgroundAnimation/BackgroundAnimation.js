import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BackgroundAnimation.css'
const Animation = () => {
	return(
		<div>
			<Carousel data-interval="200" className='carousel-fade'>
				  <Carousel.Item>
				    <img
				      className="db w-100"
				      src='https://wallpaperaccess.com/full/821031.jpg'
				      alt="First slide"
				    />
				    <Carousel.Caption>
				      <h3>First slide label</h3>
				      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="db w-100"
				      src="https://i.pinimg.com/originals/db/ef/74/dbef74748b2718312746b664e962de8e.jpg"
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="db w-100"
				      src="https://www.itl.cat/pngfile/big/55-559027_pc-game-wallpapers-hd-pc-gaming-wallpapers-hd.jpg"
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
			</Carousel>
		</div>
	);
}
export default Animation;