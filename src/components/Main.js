import React, { useState } from 'react';
import images from '../importImages';
import memesData from '../memesData';
function Main() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData);

	const getMemeImage = () => {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: url,
			};
		});
	};

	return (
		<main className='main'>
			<div className='form'>
				<div>
					<input
						type='text'
						placeholder='Top text'
						className='form--input'
						value={meme.topText}
					/>
					<input
						type='text'
						placeholder='Bottom text'
						className='form--input'
						value={meme.bottomText}
					/>
				</div>
				<button className='form--submit-btn'>
					<img
						src={images['meme-img.svg']}
						alt='get new meme'
						onClick={getMemeImage}
					/>
				</button>
			</div>
			<img src={meme.randomImage} alt='meme' />
		</main>
	);
}

export default Main;
