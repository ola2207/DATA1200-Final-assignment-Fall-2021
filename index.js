const memberCard = document.querySelectorAll(".member-card");
const memberText = document.querySelectorAll(".member-text");
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
