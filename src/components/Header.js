import React from 'react';
import images from '../importImages';
function Header() {
	return (
		<header className='header'>
			<div className='header--title'>
				<img
					className='header--title_logo'
					src={images['troll-face.svg']}
					alt='troll-face'
				/>
				<h1 className='header--title_text'>Meme Generator</h1>
			</div>
			<div className='header--subtitle'>React Course - Project 3</div>
		</header>
	);
}

export default Header;
