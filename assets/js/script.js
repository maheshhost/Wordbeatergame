// fetch data xhr
function fetchData() {
	const xhr = new XMLHttpRequest();

	xhr.onerror = function() {
		alert("data not fetched");
	}

	xhr.open('get', 'https://api.myjson.com/bins/1h9kx2', false);
	xhr.send();
	let data = JSON.parse(xhr.response); 
	return data.list;
}
// fetch data xhr
const words = fetchData();
// const name = prompt("what is your name?");
// const name1 = alert(`lets see how fast you can type ${name}`);

//levels 
const level = {
	easy: 5,
	medium: 4,
	hard: 3 
}

const currentLevel = level.easy;
// word

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


//TO change level

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

// const words = ['mahesh','function','class','document.get','object','oriented','programming','inheritance','encapsulation','polymorphism',
// 'fullstackdeveloper','frontenddeveloper','backenddeveloper','thehackernews','constructor','prototype','forloop','whileloop','switchcase','dowhileloop','decisionmakingloop','theflash','barryallen',
// 'smart','deepubc','javaspring','charging','coffee','madperson','hacker','object.create','cr7thebest','football','codeacademy','freecodecamp','cascading','this.hacker','happyhappy','nopainnogain','timeleft','00000','reactjs','scorezero','markup','computer','wireless',
// 'truefalse','programmer','.netdeveloper','python','javascript','whynot','speedtype','multiarray','multidimension','swapnumber','mindgames','csdojo','tictactoe','motivated','challenge','polarbear',
// 'iamnotfast','asp.net','c#developer','comments','caitlinsnow','public static void main','helloworld','devopsdevops','ckb','ipconfig','ifconfig','bhaiparty','hackerworld',
// 'nanobots','raspberrypi','marvenscake','youarebeautiful','abstractclass','logicprogramming','visualstudio','clientserver','arrays','youarejobless',
// 'message','communication','public','private','protected','interview','networking','graphics','engineering','processing','loading','presentation','modelview','controller',
// 'identifiers','authentication','authorization','httpcodes','dnsservers','domainname','worldwideweb','sublimetext','brackets','paranthesis','curlybrackets','nobackspace',
// 'application','cookies','sessions','hypertext','error404','selflearner','nomoney','normalization','this.name','class-based','concurrent',
// 'blockchain','tutorialspoint','thinkthink','youarethebest','parentclass','childclass','instanceof','iterators','properties','methods','setattribute','getattribute',
// 'globalscope','localscope','function()','typeof','string','namespace','interface','readonly','override','const','explicit','delegate','continue','malloc','stackalloc','foreach',
// 'math.random','information'
// ];
// url :- https://api.myjson.com/bins/1h9kx2

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
