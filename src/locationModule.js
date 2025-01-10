//Import JS files
import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";

export default class Location {
	#imgDiv = null;
	#contentDivLocation = null;

	createLayout() {
		const divImg = createDiv("locationImgPicture");
		const divContent = createDiv("location");

		mainContent.appendChild(divImg);
		mainContent.appendChild(divContent);

		this.#imgDiv = document.querySelector("#locationImgPicture");
		this.#contentDivLocation = document.querySelector("#location");
	}

	createImgLayout() {
		if (!this.#imgDiv) {
			return console.log("#IMG_DIV_ID doesn't exist");
		}

		const img = document.createElement("img");
		img.setAttribute("id", "locationPicture");
		img.alt = "A map to shown where the restaruant is";
		this.#imgDiv.appendChild(img);
	}

	createTextLayout() {
		if (!this.#contentDivLocation) {
			return console.log("#CONTENT_DIV_ID doesn't exist");
		}

		const wrapper = document.createElement("div");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");

		wrapper.setAttribute("id", "WRAPPER_ID");
		h1.setAttribute("id", "locationTitle");
		p.setAttribute("id", "locationText");

		wrapper.append(h1, p);

		this.#contentDivLocation.appendChild(wrapper);
	}

	fillText() {
		const h1 = document.querySelector("#locationTitle");
		const p = document.querySelector("#locationText");

		if (!h1 || !p) {
			return console.log("#TITLE_ID or #TEXT_ID doesn't exist");
		}

		h1.textContent = "";
		p.textContent = "";

		h1.textContent = "Location";
		p.textContent =
			"You can find our Restaurant at the bubustreet 5a in 12345 Borinburg. Opening hours are from 11:00 to 23:00. We are looking forward to your visit!";
	}

	get imgDiv() {
		return this.#imgDiv;
	}

	get contentDiv() {
		return this.#contentDivLocation;
	}
}
