var socket = io.connect();

var audioFiles = [];
for (var i = 1; i < 21; i++) {
	audioFiles.push(new Audio('sounds/tone-' + i + '.mp3'));
}

audioFiles[0].play();

//arr[numUsers - 1].play()

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$('body').on('mousedown', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		$('.container').append( '<div class=\'circle flex \'>' );
	}
});

$('body').on('mouseup mouseleave', '.circle:nth-of-type(1)', function(e) {
	if(!isMobile) {
		$(".circle:nth-of-type(2)").remove();
	}
});

$('body').on('touchstart', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	$('.container').append( '<div class=\'circle flex \'>' );
});

$('body').on('touchend', '.circle:nth-of-type(1)', function(e) {
	e.preventDefault();
	$('.circle:nth-of-type(2)').remove();
	});

socket.on('updateUsers', function(data) {
	var number = data.number
	// switch(number){
	// 	case 1:
	// 		audio.play()
	// }
});
    // var audio1 = document.createElement('audio');
    // audio1.setAttribute('src', 'sounds/tone-1-c.mp3');
    // audio1.setAttribute('autoplay', 'autoplay');

    // var audio2 = document.createElement('audio');
    // audio2.setAttribute('src', 'sounds/tone-2-d.mp3');

    // var audio3 = document.createElement('audio');
    // audio3.setAttribute('src', 'sounds/tone-3-e.mp3');
    // audio3.setAttribute('autoplay', 'autoplay');
    
    // var audio4 = document.createElement('audio');
    // audio3.setAttribute('src', 'sounds/tone-3-e.mp3');
    // audio3.setAttribute('autoplay', 'autoplay');

    // $.get();

    // audio1.addEventListener("load", function() {
    //     audio1.play();
    // }, true);

    // audio2.addEventListener("load", function() {
    //     audio2.play();
    // }, true);
    
    // audio3.addEventListener("load", function() {
    //     audio3.play();
    // }, true);

    // audio4.addEventListener("load", function() {
    //     audio4.play();
    // }, true);

    // $('.play').click(function() {
    //     audio1.play();
    //     audio2.play();
    //     audio3.play();
    //     audio4.play();
    // });

    // $('.pause').click(function() {
    //     audio1.pause();
    //     audio2.pause();
    //     audio3.pause();
    //     audio4.pause();
    // });
