const sum = require("./sum").sum;
import { sum2 } from "./sum2";
import { style } from "./css/index.scss";
import Icon from "./assets/img/proba.png";

console.log("Hello World");
console.log(sum(2, 3));
console.log(sum2(2, 3));

let heading = document.querySelector("#demo"),
	sumValue = sum(10, 5);

heading.innerText = `10+10= ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("div").append(myIcon);
document.querySelector("div").classList.add("change");

fetch("https://raw.githubusercontent.com/Lukasz-Szumski/reservation/main/endpoints/destination.json")
	.then(res => res.json()) // Transform the data into text res.text
	.then(data => {
		data.origin.forEach(element => {
			const origin = document.getElementById("origin");
			const optionOrigin = document.createElement("option");
			optionOrigin.value = element.value;
			console.log(element);
			// console.log(option.value);
			optionOrigin.textContent = element.desc;
			origin.appendChild(option);

			// console.log(element);
		});
		data.destination.forEach(element => {
			const destination = document.getElementById("destination");
			const optionDestination = document.createElement("option");
			optionDestination.value = element.value;
			console.log(element);
			// console.log(option.value);
			optionDestination.textContent = element.desc;
			destination.appendChild(option);

			if (optionOrigin === optionDestination) {
				optionDestination.setAttribute("disabled");
			}

			// console.log(element);
		});
	})

	// console.log(data);

	.catch(err => console.log(err));
