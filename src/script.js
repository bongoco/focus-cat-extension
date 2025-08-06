const images=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg'];
  const bg1=document.getElementById('bg1');
  const bg2=document.getElementById('bg2');
let currentIndex=Math.floor(Math.random()*images.length);
let visibleLayer=1;
let clockDiv;

function toggleClock() {
  	clockDiv.classList.toggle("hidden");
}

function clock() {
	const now = new Date();
	let hours = now.getHours();
	const minutes = now.getMinutes();
	let amPm;

	//Setting AM PM and keeping it NOT military time
	if (hours<12) {
		amPm="AM"
	}
	else {
		amPm="PM"
	}

	hours=hours%12;
	if (hours===0) {
		hours=12;
	}

	//Convering to string and padding for 05:07 AM 0s
	//const paddedHours=String(hours).padStart(2,'0');
	const paddedMinutes=String(minutes).padStart(2,'0');

	//${...} are template literals, replaces string with actual value instead of + and ''
	document.getElementById('clock').textContent=`${hours}:${paddedMinutes} ${amPm}`

	setTimeout(clock, 500); //setTimeOut will update page every 500ms, if not set would keep time static
}

function setBackground(index) {
  if (visibleLayer===1) {
    bg2.style.backgroundImage=`url(${images[index]})`;
    bg2.classList.add('visible');
    bg1.classList.remove('visible');
    visibleLayer=2;
  } 
  else {
    bg1.style.backgroundImage=`url(${images[index]})`;
    bg1.classList.add('visible');
    bg2.classList.remove('visible');
    visibleLayer=1;
  }
}

function nextBackground() {
	currentIndex=(currentIndex+1) % images.length; //if goes to last image index 9, modulo sets index back to 0
	setBackground(currentIndex);
}

window.onload=function() {
	const initialImage=`url(${images[currentIndex]})`;
	clockDiv=document.getElementById("clock");

	//Adding no fade, then removing no fade so first image loads in without black screen
	bg1.classList.add('no-transition');
	bg1.style.backgroundImage=initialImage;
	bg2.style.backgroundImage=initialImage;
	void bg1.offsetWidth;
  	bg1.classList.remove('no-transition');

  	bg1.classList.add('visible');
	clock();
	setInterval(nextBackground, 15000); //runs nextBackground repetitively every 10 seconds 

}










