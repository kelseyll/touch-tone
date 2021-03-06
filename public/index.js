var socket = io.connect();

var audioFiles = [];
for (var i = 1; i < 21; i++) {
	audioFiles.push(new Audio('sounds/tone-' + i + '.mp3'));
}

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


$('body').on('mousedown', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		socket.emit('userEnter', {number: 1});
	}
});

$('body').on('mouseup', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		socket.emit('userLeave', {number: 1});
	}
});

$('body').on('touchstart', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	socket.emit('userEnter', {number: 1});
	$('h1').addClass('dark-h1');
});

$('body').on('touchend', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	socket.emit('userLeave', {number: 1});
	$('h1').removeClass('dark-h1');
	});

socket.on('updateUsers', function(data) {
	console.log('poop');
	var number = data.number;
	if( number > 20 ) {
		number = 20;
	}
	turnOffAudio();
	console.log('attempting to play item', number, audioFiles[number - 1]);
	audioFiles[number - 1].play();
});

socket.on('addCircle', function(data) {
	console.log('add circle?');
	$('.container').append( '<div class=\'circle flex \'>' );
});

socket.on('removeCircle', function(data) {
	console.log('remove circle?');
	$('.circle:nth-of-type(2)').remove();
});

function turnOffAudio() {
	for (var i=0; i<audioFiles.length; i++) {
		audioFiles[i].pause();
		audioFiles[i].currentTime = 0;
	}
}
