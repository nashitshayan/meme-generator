import React, { useState, useEffect } from 'react';
import images from '../importImages';

function Main() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((memeData) => setAllMemes(memeData.data.memes));
	}, []);

	const getMemeImage = () => {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: url,
			};
		});
	};

	function handleChange(e) {
		const { name, value } = e.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}
	return (
		<main className='main'>
			<div className='form'>
				<div>
					<input
						type='text'
						placeholder='Top text'
						className='form--input'
						value={meme.topText}
						onChange={handleChange}
						name='topText'
					/>
					<input
						type='text'
						placeholder='Bottom text'
						className='form--input'
						value={meme.bottomText}
						onChange={handleChange}
						name='bottomText'
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
			<div className='meme'>
				<img src={meme.randomImage} alt='meme' className='meme--image' />
				<h2 className='meme--text top'>{meme.topText}</h2>
				<h2 className='meme--text bottom'>{meme.bottomText}</h2>
			</div>
		</main>
	);
}

export default Main;
