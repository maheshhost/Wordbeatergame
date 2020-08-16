// fetch data xhr
const words = ['abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float', 'for', 'goto', 'implement', 'imports', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void', 'volatile', 'while', 'Reserved words for literal values', 'false', 'null', 'true', 'ADD', 'ALL', 'ALTER', 'AND', 'ANY', 'AS', 'ASC', 'AUTHORIZATION', 'BACKUP', 'BEGIN', 'BETWEEN', 'BREAK', 'BROWSE', 'BULK', 'BY', 'CASCADE', 'CASE', 'CHECK', 'CHECKPOINT', 'CLOSE', 'CLUSTERED', 'COALESCE', 'COLLATE', 'COLUMN', 'COMMIT', 'COMPUTE', 'CONSTRAINT', 'CONTAINS', 'CONTAINSTABLE', 'CONTINUE', 'CONVERT', 'CREATE', 'CROSS', 'CURRENT', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURSOR', 'DATABASE', 'DBCC', 'DEALLOCATE', 'DECLARE', 'DEFAULT', 'DELETE', 'DENY', 'DESC', 'DISK', 'DISTINCT', 'DISTRIBUTED', 'DOUBLE', 'DROP', 'DUMP', 'ELSE', 'END', 'ERRLVL', 'ESCAPE', 'EXCEPT', 'EXEC', 'EXECUTE', 'EXISTS', 'EXIT', 'EXTERNAL', 'FETCH', 'FILE', 'FILLFACTOR', 'FOR', 'FOREIGN', 'FREETEXT', 'FREETEXTTABLE', 'FROM', 'FULL', 'FUNCTION', 'GOTO', 'GRANT', 'GROUP', 'HAVING', 'HOLDLOCK', 'IDENTITY', 'IDENTITY_INSERT', 'IDENTITYCOL', 'IF', 'IN', 'INDEX', 'INNER', 'INSERT', 'INTERSECT', 'INTO', 'IS', 'JOIN', 'KEY', 'KILL', 'LEFT', 'LIKE', 'LINENO', 'LOAD', 'MERGE', 'NATIONAL', 'NOCHECK', 'NONCLUSTERED', 'NOT', 'NULL', 'NULLIF', 'OF', 'OFF', 'OFFSETS', 'ON', 'OPEN', 'OPENDATASOURCE', 'OPENQUERY', 'OPENROWSET', 'OPENXML', 'OPTION', 'OR', 'ORDER', 'OUTER', 'OVER', 'PERCENT', 'PIVOT', 'PLAN', 'PRECISION', 'PRIMARY', 'PRINT', 'PROC', 'PROCEDURE', 'PUBLIC', 'RAISERROR', 'READ', 'READTEXT', 'RECONFIGURE', 'REFERENCES', 'REPLICATION', 'RESTORE', 'RESTRICT', 'RETURN', 'REVERT', 'REVOKE', 'RIGHT', 'ROLLBACK', 'ROWCOUNT', 'ROWGUIDCOL', 'RULE', 'SAVE', 'SCHEMA', 'SECURITYAUDIT', 'SELECT', 'SEMANTICKEYPHRASETABLE', 'SEMANTICSIMILARITYDETAILSTABLE', 'SEMANTICSIMILARITYTABLE', 'SESSION_USER', 'SET', 'SETUSER', 'SHUTDOWN', 'SOME', 'STATISTICS', 'SYSTEM_USER', 'TABLE', 'TABLESAMPLE', 'TEXTSIZE', 'THEN', 'TO', 'TOP', 'TRAN', 'TRANSACTION', 'TRIGGER', 'TRUNCATE', 'TRY_CONVERT', 'TSEQUAL', 'UNION', 'UNIQUE', 'UNPIVOT', 'UPDATE', 'UPDATETEXT', 'USE', 'USER', 'VALUES', 'VARYING', 'VIEW', 'WAITFOR', 'WHEN', 'WHERE', 'WHILE', 'WITH', 'WITHIN GROUP', 'WRITETEXT', 'algorithm', 'analog', 'appapplication', 'array', 'backup ', 'bandwidth ', 'binary ', 'bit ', 'bite ', 'bitmap ', 'blog ', 'blogger ', 'bookmark ', 'boot ', 'broadband ', 'browser ', 'buffer ', 'bug ', 'bus ', 'byte', 'cache', 'caps lock', 'captcha', 'CD', 'CD-ROM', 'client', 'clip art', 'clip board', 'cloud computing', 'command', 'compile', 'compress', 'computer', 'computer program', 'configure', 'cookie', 'copy', 'CPU (central processing unit)', 'cybercrime', 'cyberspace', 'dashboard', 'data', 'data mining', 'database', 'debug', 'decompress', 'delete', 'desktop', 'development', 'digital', 'disk', 'DNS (domain name system)', 'document', 'domain', 'domain name', 'dot', 'dot matrix', 'download', 'drag', 'DVD (digital versatile disc)', 'dynamic', 'email', 'emoticon', 'encrypt', 'encryption', 'enter', 'exabyte', 'FAQ', 'file', 'finder', 'firewall', 'firmware', 'flaming', 'flash', 'flash drive', 'floppy disk', 'flowchart', 'folder', 'font', 'format', 'frame', 'freeware', 'hacker', 'hardware', 'home page', 'host', 'html', 'hyperlink', 'hypertext', 'Macintosh', 'macro', 'mainframe', 'malware', 'media', 'memory', 'mirror', 'modem', 'monitor', 'motherboard', 'mouse', 'multimedia', 'page', 'password', 'paste', 'path', 'phishing', 'piracy', 'pirate', 'platform', 'plug-in', 'podcast', 'pop-up', 'portal', 'print', 'printer', 'privacy', 'process', 'program', 'programmer', 'protocol', 'save', 'scan', 'scanner', 'screen', 'screenshot', 'script', 'scroll', 'scroll bar', 'search engine', 'security', 'server', 'shareware', 'shell', 'shift', 'shift key', 'snapshot', 'social networking', 'software', 'spam', 'spammer', 'spreadsheet', 'spyware', 'status bar', 'storage', 'supercomputer', 'surf', 'syntax', 'web', 'web host', 'webmaster', 'website', 'widget', 'wiki', 'window', 'Windows', 'wireless', 'word processor', 'workstation', 'World Wide Web', 'worm', 'WWW']
;
const level = {
	easy: 5,
	medium: 4,
	hard: 3 
}

const currentLevel = level.easy;
let time = currentLevel;
let score = {
	currentScore : 0,
	highScore : 0
};
let isPlaying;

function updateLocalStorageData() {
	let repo = window.localStorage;
	if(repo.getItem("score") == null) {
		repo.setItem("score", JSON.stringify(score));
	}
}

//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const high_score = document.querySelector('#high-score');


//initialize game
function init() {
	highScoreDate = getLocalData();
	high_score.innerHTML = highScoreDate.highScore;
	wordInput.focus();
	seconds.innerHTML = currentLevel;
	//load random words function
	showWords(words);
	//start matching on USerinput
	wordInput.addEventListener('input',startMatch,true); 
	//countDown for every word
	setInterval(countDown, 1500);
	setInterval(checkStatus, 1500);
}

function matchWords(){
	wordInput.value = wordInput.value.toLowerCase();

	if(wordInput.value === currentWord.innerHTML.toLowerCase()){
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
	message.innerHTML = "start typing..";
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWords(words);
		wordInput.value = '';
		score.currentScore++;
	} 
	if(score.currentScore === -1){
		scoreDisplay.innerHTML = 0;
	}else {
		scoreDisplay.innerHTML = score.currentScore;
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
		score.highScore = getHighScore(score.currentScore, score.highScore); 
		high_score.innerHTML = score.highScore;
		setLocalData();
		score.currentScore = -1;
	}
}

function getHighScore(currentScore, highScore) {
	if(currentScore > highScore)
		return currentScore;
	return highScore;
}

function setLocalData() {
	window.localStorage.setItem("score", JSON.stringify(score));
}

function getLocalData() {
	return JSON.parse(window.localStorage.getItem("score"));
}

updateLocalStorageData();
window.addEventListener('load', init);
