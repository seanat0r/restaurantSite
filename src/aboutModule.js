//Import JS files
import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";

import aboutPicture from "./images/about-picture.png";

export default class Aboutrest {
	#imgDivAbout = null;
	#contentDivAbout = null;

	createLayout() {
		const divImg = createDiv("imgPicture");
		const divContent = createDiv("about");

		mainContent.appendChild(divImg);
		mainContent.appendChild(divContent);

		this.#imgDivAbout = document.querySelector("#imgPicture");
		this.#contentDivAbout = document.querySelector("#about");
	}

	createImgLayout() {
		if (!this.#imgDivAbout) {
			return console.log("#IMG_DIV_ID doesn't exist");
		}

		const img = document.createElement("img");
		img.setAttribute("id", "aboutPicture");
		img.alt = "Our Team";
		this.#imgDivAbout.appendChild(img);
	}

	createTextLayout() {
		if (!this.#contentDivAbout) {
			return console.log(this.#contentDivAbout + " doesn't exist");
		}

		const wrapper = document.createElement("div");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");

		wrapper.setAttribute("id", "aboutWarpper");
		h1.setAttribute("id", "aboutTitle");
		p.setAttribute("id", "aboutText");

		wrapper.append(h1, p);
		this.#contentDivAbout.appendChild(wrapper);
	}

	fillText() {
		const h1 = document.querySelector("#aboutTitle");
		const p = document.querySelector("#aboutText");

		if (!h1 || !p) {
			return console.log("h1 or p doesn't exist");
		}

		h1.textContent = "";
		p.textContent = "";

		h1.textContent = "About";
		p.textContent =
			"At Medin, we believe that food is more than just sustenance; it's a reflection of culture, community, and the land. We're passionate about showcasing the vibrant flavors and rich culinary heritage of Borinburg through our menu of authentic, homemade dishes. From Grandma Elsa's hearty Oven to locally-sourced Etkar, each dish on our menu tells a story. We use the freshest, seasonal ingredients sourced from local farmers and purveyors whenever possible, ensuring that every bite is a true reflection of our region's bounty. Our inviting restaurant provides a warm and welcoming atmosphere where you can savor the flavors of Borinburg while enjoying the company of friends and family. Whether you're a local resident or a visitor exploring our beautiful corner of the world, we invite you to experience the taste of Borinburg at Medin.";
	}

	// Getter für die Bild- und Content-Divs
	get imgDiv() {
		return this.#imgDivAbout;
	}

	get contentDiv() {
		return this.#contentDivAbout;
	}
}
