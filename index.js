// Hamburger menu
const cb = document.querySelector("#cb");

window.onresize = () => {
	if (window.innerWidth > 600) {
		cb.checked = false;
		document.body.style.overflow = "scroll";
	}
};

cb.onclick = () => {
	if (cb.checked && window.innerWidth <= 600) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "scroll";
	}
};

// Slideshow
const p1 = document.querySelector(".p1");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const siteName = document.querySelector(".site-name");
const siteDescription = document.querySelector(".site-description");

const bilder = [
	{
		bilde: "images/slide2.jpg",
		tittel: "Accessibility",
		beskrivelse:
			"This page contains a short presentation of accessibility, how the group tested the code for accessibility using an automated test.",
	},
	{
		bilde: "images/slide3.jpg",
		tittel: "Topical information",
		beskrivelse:
			"This page contains a short text about electric scooters and the various problems they have made.",
	},
	{
		bilde: "images/slide4.jpg",
		tittel: "Fun page",
		beskrivelse: "This page contains a fun little game!",
	},
	{
		bilde: "images/slide1.png",
		tittel: "Reflection essay",
		beskrivelse:
			"This page contains a short text describing the challenges experienced by a member of the group when transitioning from upper-secondary school to university.",
	},
];

let interval;
let loaded = false;
let i = 0;
let stopSlide = false;
let slidesLength = 40;

const slideshow = (p) => {
	if (i >= bilder.length) {
		i = 0;
	}

	const bakgrunn = bilder[i].bilde;

	siteName.innerHTML = bilder[i].tittel;
	siteDescription.innerHTML = bilder[i].beskrivelse;

	p1.style.backgroundImage = `linear-gradient(rgba(86, 79, 95, 0.64), rgba(79, 30, 83, 0.39)), url(${bakgrunn})`;

	if (i == 0) {
		document.getElementById("btn").setAttribute("href", "accessibility.html");
	} else if (i == 1) {
		document.getElementById("btn").setAttribute("href", "topical-info.html");
	} else if (i == 2) {
		document.getElementById("btn").setAttribute("href", "fun-page.html");
	} else if (i == 3) {
		document.getElementById("btn").setAttribute("href", "reflection.html");
	}

	i++;
};

//G??r til neste slide manuelt
const nextImg = (param) => {
	if (!stopSlide) {
		slideshow(param);
		interval = clearInterval(interval);
		interval = setInterval(slideshow, 10000);
	} else {
		slideshow(param);
	}
};

interval = setInterval(slideshow, 10000);

leftArrow.onclick = () => {
	nextImg("previous");
};

rightArrow.onclick = () => {
	nextImg();
};

// home-symbol skifter farge
function function_Omo() {
	document
		.getElementById("home-img")
		.setAttribute("src", "images/home_hover.png");
}
function default_Bilde() {
	document.getElementById("home-img").setAttribute("src", "images/home.png");
}
