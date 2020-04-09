// fetch data xhr
function fetchData() {
	const xhr = new XMLHttpRequest();

	xhr.onerror = function() {
		alert("data not fetched");
	}

	xhr.open('GET', 'arrayData', false);
	xhr.send();
	let data = JSON.parse(xhr.response); 
	return data.list;
}
// fetch data xhr
const words = fetchData();
const name = prompt("what is your name?");
const name1 = alert(`lets see how fast you can type ${name}`);

//levels 
const level = {
	easy: 5,
	medium: 4,
	hard: 3 
}

const currentLevel = level.easy;

//initialize game
function init() {
	//show seconds in ui
	wordInput.focus();
	seconds.innerHTML = currentLevel;
	//load random words function
	showWords(words);
	//start matching on USerinput
	wordInput.addEventListener('input',startMatch,true); 
	//countDown for every word
	setInterval(countDown, 1500);
	setInterval(checkStatus, 3000);
}

//Global varaibles
let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

function matchWords(){
	wordInput.value = wordInput.value.toLowerCase();

	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'correct!!!';
		return true;
	}else {
		message.innerHTML = 'typing...';
		return false;
	}
}

function showWords(words) {
	//generate random words 
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function startMatch () {
	if(matchWords()){
		isPlaying = true;
		time = currentLevel + 1;
		showWords(words);
		wordInput.value = '';
		score++;
	} 
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else {
		scoreDisplay.innerHTML = score;
	}
}

//countDown timer
function countDown() {
	//make sure time is not run out
	if(time > 0){
		time--;
	} else if(time === 0) {
		isPlaying = false;
	}
	//show time
	timeDisplay.innerHTML = time;
}

function checkStatus () {
	if(!isPlaying && time === 0){
		message.innerHTML = "Game Over!!!";
		score = -1;
	}
}

window.addEventListener('load', init);
