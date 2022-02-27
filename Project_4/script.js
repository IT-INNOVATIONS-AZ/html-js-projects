const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const showSmaylik = document.getElementById("burda-nida-smaylik");
const text = "IT INNOVATIONS ACADEMY";
let index = 1;
let speed = 300 / speedEl.value;

writeText();
let howManyTimeTextShown = 0;
function writeText() {
	textEl.innerText = text.slice(0, index);

	index++;
	if (index === text.length) {
		howManyTimeTextShown++;
		if (howManyTimeTextShown % 2 === 0) {
			showSmaylik.innerText = ":)";
		} else {
			showSmaylik.innerText = "!";
		}
	}
	if (index > text.length) {
		index = 1;
	}

	setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
