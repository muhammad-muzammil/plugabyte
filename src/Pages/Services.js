import React from 'react';
import CardList from '../Components/CardList/CardList'
import {ServiceList} from '../Components/CardList/ServiceList'
import ServicesNavigation from '../Components/ServicesNavigation/ServicesNavigation.js'
import './Services.css'
const Services = () => {
	return(
		<div className="main-container">
			<ServicesNavigation />
			<CardList ServiceList={ServiceList}/>
		</div>
	);
}


export default Services;