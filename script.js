"use strict"

let i = 0;
let images = [];
var time = 3000;

// image list
images[0] = 'tacoImage.jpg';
images[1] = '3tacos.jpg';
images[2] = 'guac.JPG';


// change image

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1 ) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

