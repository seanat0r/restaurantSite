import "./style.css";

import { mainContent as content } from "./smallRepetitiveFunctions.js";

import Home from "./homeModule.js";
import About from "./AboutModule.js";
import Menu from "./MenueModule.js";
import Location from "./LocationModule.js";

const about = new About();
const home = new Home();
const menu = new Menu();
const location = new Location();

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");
const locationBtn = document.querySelector(".location");

let firstTimeOnPage = true;

function clearContent() {
	content.innerHTML = "";
}

function showTab(tab) {
	clearContent();
	tab.createLayout();
	tab.createImgLayout();
	tab.createTextLayout();
	tab.fillText();
}

function changeTabs() {
	document.querySelector("nav").addEventListener("click", (event) => {
		const target = event.target;
		switch (target) {
			case homeBtn:
				showTab(home);
				break;
			case aboutBtn:
				showTab(about);
				break;
			case menuBtn:
				showTab(menu);
				break;
			case locationBtn:
				showTab(location);
				break;
            default:
                console.log("No tab selected");
                break;
		}
	});
	if (firstTimeOnPage) {
		showTab(home);
		firstTimeOnPage = false;
	}
}

changeTabs();
