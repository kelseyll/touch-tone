var socket = io.connect();

var audioFiles = [];
for (var i = 1; i < 21; i++) {
	audioFiles.push(new Audio('sounds/tone-' + i + '.mp3'));
}

audioFiles[0].play();

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$('body').on('mousedown', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		socket.emit('userEnter', {number: 1});
		$('.container').append( '<div class=\'circle flex \'>' );
	}
});

$('body').on('mouseup mouseleave', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		socket.emit('userLeave', {number: 1});
		$(".circle:nth-of-type(2)").remove();
	}
});

$('body').on('touchstart', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	socket.emit('userEnter', {number: 1});
	$('.container').append( '<div class=\'circle flex \'>' );
});

$('body').on('touchend', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	socket.emit('userLeave', {number: 1});
	$('.circle:nth-of-type(2)').remove();
	});

socket.on('updateUsers', function(data) {
	var number = data.number;
	turnOffAudio();
	audioFiles[number].play();
});

function turnOffAudio() {
	for (var i=1; i<audioFiles.length; i++) {
		audioFiles[i].stop();
	}
}
