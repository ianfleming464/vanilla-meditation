const app = () => {
	const song = document.querySelector('.song');
	const play = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.vid-container video');

	// placeholder sounds
	const sounds = document.querySelectorAll('.sound-picker button');

	const timeDisplay = document.querySelector('.time-display');

	const outlineLength = outline.getTotalLength();

	// meditation length
	let fakeDuration = 600;

	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	// play sounds!
	play.addEventListener('click', () => {
		song.play();
	});
};

app();
