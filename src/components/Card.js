import React,{Component} from 'react';

const Card=()=>{
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src='https://robohash.org/hi?100x100'/>
			<div>
				<h2>John Doe</h2>
				<p>johndoe@gmail.com</p>
			</div>
			
		</div>
		);
}

export default Card;