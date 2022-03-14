const cardContainer = document.getElementById("card-container");
const list = document.getElementById("list");
const circleEl = document.getElementsByClassName("circle");
const data = [
	{
		title: "Saving",
		img: "https://cdn-icons-png.flaticon.com/512/951/951764.png",
	},
	{
		title: "Payment",
		img: "https://cdn-icons.flaticon.com/png/512/2657/premium/2657138.png?token=exp=1647075618~hmac=46626a3b20c0a6b935524de8f4a64e80",
	},
	{
		title: "Bill",
		img: "https://cdn-icons.flaticon.com/png/512/2657/premium/2657138.png?token=exp=1647075618~hmac=46626a3b20c0a6b935524de8f4a64e80",
	},
];

const fetchedData = fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((data) => {
		list.innerHTML =
			"<li>" + data.map((item) => item.title).join("</li><li>") + "</li>";
	});

console.log(fetchedData);

const a = data.map((item, index) => {
	return `<div class="rec"><div class="circle"></div><p>${item.title}</p></div>`;
});
// data.map((item, index) => {
// 	return (circleEl[index].style.backgroundImage = "url(item.img)");
// });

cardContainer.innerHTML = a;
console.log(circleEl);
