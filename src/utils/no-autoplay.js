
/*
var player = videojs('video', {
    controls: false,
    autoplay: 'muted',
    height: '100%',
    disablePictureInPicture: true,
    fullscreen: false,
	loop: true
});
*/

window.onload = function() {
	// Video

	var playButton = document.getElementById('play-pause');
	var muteButton = document.getElementById('mute');

	playButton.addEventListener('click', function() {
		if(playing){
			player.pause();
			playButton.innerHTML = "<i class='fas fa-play' style=''></i>";
			playing = false;
		}else{
			player.play();
			playButton.innerHTML = "<i class='fas fa-pause' style=''></i>";
			playing = true;
		}
	});

	muteButton.addEventListener('click', function() {
		player.getVolume().then(function(volume) {
			// `volume` indicates the volume level of the player
			console.log(volume);
			if(volume==1 || volume=="1"){
				player.setVolume(0);
				muteButton.innerHTML = "<i class='fas fa-volume-mute' style=''></i>";
			}else{
				player.setVolume(0);
				muteButton.innerHTML = "<i class='fas fa-volume-up' style=''></i>";
			}
		});
	});

	/*
	var playButton = document.getElementById('play-pause');
	var muteButton = document.getElementById('mute');
	var playing = true;

	playButton.addEventListener('click', function() {
		if(playing){
			player.pause();
			playButton.innerHTML = "<i class='fas fa-play' style=''></i>";
			playing = false;
		}else{
			player.play();
			playButton.innerHTML = "<i class='fas fa-pause' style=''></i>";
			playing = true;
		}
	});

	muteButton.addEventListener('click', function() {
		if(player.muted()){
			player.muted(false);
			muteButton.innerHTML = "<i class='fas fa-volume-up' style=''></i>";
		}else{
			player.muted(true);
			muteButton.innerHTML = "<i class='fas fa-volume-mute' style=''></i>";
		}
	});
	*/

    
	/*
	var video = document.getElementById('video')
	// Buttons
	var playButton = document.getElementById('play-pause')
	var muteButton = document.getElementById('mute')
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "<i class='fas fa-play' style=''></i>"
    }

    playButton.addEventListener('click', function() {
		if (video.paused == true) {
			// Play the video
			video.play()

			// Update the button text to 'Pause'
			playButton.innerHTML = "<i class='fas fa-pause' style=''></i>"
		} else {
			// Pause the video
			video.pause()

			// Update the button text to 'Play'
			playButton.innerHTML = "<i class='fas fa-play' style=''></i>"
		}
	})
    
	// Event listener for the mute button
	muteButton.addEventListener('click', function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true

			// Update the button text
			muteButton.innerHTML = "<i class='fas fa-volume-mute' style=''></i>"
		} else {
			// Unmute the video
			video.muted = false

			// Update the button text
			muteButton.innerHTML = "<i class='fas fa-volume-up' style=''></i>"
		}
	})
	*/
	
}