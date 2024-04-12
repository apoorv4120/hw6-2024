var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplau = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});
window.onload = function () {
	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	});
	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});
	document.querySelector("#slower").addEventListener("click", function () {
		console.log("Slow Down Video");
		video.playbackRate *= 0.90;
		console.log("Speed is " + video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function () {
		console.log("Speed Up Video");
		video.playbackRate /= 0.90;
		console.log("Speed is " + video.playbackRate);
	});
	document.querySelector("#skip").addEventListener("click", function () {
		console.log("Skip Ahead");
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
			console.log("Video Current Time is " + video.currentTime);
		} else {
			video.currentTime = 0;
			console.log("Video Current Time is " + video.currentTime);
		}
	});
	document.querySelector("#mute").addEventListener("click", function () {
		if (video.muted == false) {
			video.muted = true;
			console.log("Mute");
			document.getElementById("mute").innerHTML = "Unmute";
		}
		else {
			video.muted = false;
			console.log("Unmute");
			document.getElementById("mute").innerHTML = "Mute";
		}
	});
	document.querySelector("#slider").addEventListener("change", function () {
		console.log("The current value is " + video.volume);
		video.volume = this.value / 100;

		document.getElementById("volume").innerHTML = this.value + "%";
		console.log("The current value is " + video.volume);
	});
	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});
	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
};
