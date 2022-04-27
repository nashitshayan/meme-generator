import React from 'react';
import images from '../importImages';
function Main() {
	return (
		<main className='main'>
			<form className='form'>
				<div>
					<input
						type='text'
						placeholder='meme header'
						className='form--input'
					/>
					<input
						type='text'
						placeholder='meme content'
						className='form--input'
					/>
				</div>
				<button className='form--submit-btn'>
					<img src={images['meme-img.svg']} alt='get new meme' />
				</button>
			</form>
		</main>
	);
}

export default Main;
