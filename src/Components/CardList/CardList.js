import React from 'react'
// import Card from '../Card/Card'
import './CardList.css'
const CardList = ({ServiceList}) => {
	return(
		<div className="container">
			{
			ServiceList.map((service, i) => {
				return (
					<div className="gallery-container">
						<div className="gallery-item">
							<a className="image" href="/services">
								<img src= {service.image} alt='img'/>
							</a>
							<div className="text">{service.title}</div>
						</div>
					</div>
				)
			})
			}
		</div>
	);
}
export default CardList;