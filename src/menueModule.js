//Import JS files
import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";

export default class Menu {
	#imgDiv = null;
	#contentDiv = null;

	createMenueList(
		name1,
		name2,
		name3,
		text1,
		text2,
		text3,
		price1,
		price2,
		price3,
        wrapper
	) {
		const foodName = [name1, name2, name3];
		const foodText = [text1, text2, text3];
		const foodPrice = [price1, price2, price3];

		const ul = document.createElement("ul");
        wrapper.appendChild(ul);

		for (let i = 0; i < foodName.length; i++) {
			const li = document.createElement("li");
			const h2 = document.createElement("h2");
			const p = document.createElement("p");
            const p2 = document.createElement("p");

            h2.textContent = foodName[i];
            p.textContent = foodText[i];
            p2.textContent = foodPrice[i];

            ul.append(li);
            li.append(h2, p, p2);

		}
	}

	createLayout() {
		const divImg = createDiv("menuePictureImage");
		const divContent = createDiv("menu");

		mainContent.appendChild(divImg);
		mainContent.appendChild(divContent);

		this.#imgDiv = document.querySelector("#menuePictureImage");
		this.#contentDiv = document.querySelector("#menu");
	}

	createImgLayout() {
		if (!this.#imgDiv) {
			return console.log("#IMG_DIV_ID doesn't exist");
		}

		const img = document.createElement("img");
		img.setAttribute("id", "menuePicture");
		img.alt = "some Food we coocked";
		this.#imgDiv.appendChild(img);
	}

	createTextLayout() {
		if (!this.#contentDiv) {
			return console.log("#CONTENT_DIV_ID doesn't exist");
		}

		const wrapper = document.createElement("div");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");

		wrapper.setAttribute("id", "WRAPPER_ID");
		h1.setAttribute("id", "menuTitle");
		p.setAttribute("id", "menuText");

		wrapper.append(h1, p);
		this.#contentDiv.appendChild(wrapper);

        this.createMenueList("bekbe", "bothscka", "pathethrote", "Chickensoup with natural flavor", "Vegansoup with high protein", "Meatsoup with many diffrent meat from chicken, becaon and beef", "5$", "6$", "7$", wrapper);
	}

	fillText() {
		const h1 = document.querySelector("#menuTitle");
		const p = document.querySelector("#menuText");

		if (!h1 || !p) {
			return console.log("#TITLE_ID or #TEXT_ID doesn't exist");
		}

		h1.textContent = "";
		p.textContent = "";

		h1.textContent = "Menu";
		p.textContent =
			"Every day we offer a new menu. You can choose between a vegetarian, vegan or meat menu. We also offer a children's menu. We are happy to take your wishes into account. Please let us know in advance if you have any allergies or intolerances. We will be happy to advise you on the composition of the menu. We look forward to your visit!";
	}

	get imgDiv() {
		return this.#imgDiv;
	}

	get contentDiv() {
		return this.#contentDiv;
	}
}
