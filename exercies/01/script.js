const input = document.getElementById("input");
const countValue = document.getElementById("countValue");
const btn = document.getElementById("countBtn");

btn.addEventListener("click", () => {
	countValue.innerText = input.value.length;
});
