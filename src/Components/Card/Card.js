import React from 'react'
import './Card.css'
const Card = ({id, title, image, description}) => {
	return(
		<div className="img__wrap">
			<img
				className="img__img"
				src= {image}
				alt='img'/>
			<div className="img__description">
				<h2>{title}</h2>
				<p >{description}</p>
			</div>
		</div>
	);
}

export default Card;