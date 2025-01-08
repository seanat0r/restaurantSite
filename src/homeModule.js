//Import JS files
import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";
//Import png files
import homePicture from "./images/homePicture.png";

export default class Home {
	#imgDiv = null;
	#homeDiv = null;

	createHomeLayout() {
		const divImg = createDiv("img");
		const divHome = createDiv("home");

		mainContent.appendChild(divImg);
		mainContent.appendChild(divHome);

		this.#imgDiv = document.querySelector("#img");
		this.#homeDiv = document.querySelector("#home");
	}
	createImgLayout() {
		const imgDiv = document.querySelector("#img");
		//checks if the div exists
		if (!imgDiv) {
			return console.log(imgDiv + "doesn't exist");
		}

		const img = document.createElement("img");
		img.setAttribute("id", "homePicture");
		img.alt = "Eating Hall from our Restaurant";
		this.#imgDiv.appendChild(img);
	}
	createTextLayout() {
		//checks if the div exists
		if (!this.#homeDiv) {
			return console.log(homeDiv + "doesn't exist");
		}

		const wrapper = document.createElement("div");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");

		wrapper.setAttribute("id", "wrapper");
		h1.setAttribute("id", "homeTitle");
		p.setAttribute("id", "homeText");

		wrapper.append(h1, p);
        this.#homeDiv.appendChild(wrapper);
	}
	fillText() {
		const h1 = document.querySelector("#homeTitle");
		const p = document.querySelector("#homeText");

		//checks if the h1-element or the p-element exists
		if (!h1 || !p) {
			return console.log("h1 or p doesn't exist");
		}
		h1.textContent = "";
		p.textContent = "";

        h1.textContent = "A taste of Borinburg";
        p.textContent = "At Medin, we believe that the heart of a community lies in its culinary traditions. We're passionate about showcasing the vibrant flavors and rich heritage of Borinburg through our menu of authentic, homemade dishes.From [mention a few signature dishes, e.g., 'Grandma's potato' to 'locally-sourced pepe', each dish on our menu tells a story. We use the freshest, seasonal ingredients sourced from local farmers and purveyors whenever possible, ensuring that every bite is a true reflection of our region's bounty.Our cozy restaurant provides a warm and inviting atmosphere where you can savor the flavors of Borinburg while enjoying the company of friends and family. Whether you're a local resident or a visitor exploring our beautiful corner of the world, we invite you to experience the taste of Borinburg at Borinburg.";
	}
}
