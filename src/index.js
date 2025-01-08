import "./style.css";

import {mainContent as content} from "./smallRepetitiveFunctions.js"

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
    tab.createHomeLayout();
    tab.createImgLayout();
    tab.createTextLayout();
    tab.fillText();
}

function changeTabs() {
    homeBtn.addEventListener("click", () => {
        showTab(home);
    });
    aboutBtn.addEventListener("click", () => {
        showTab(about);
    });
    menuBtn.addEventListener("click", () => {
        showTab(menu);
    });
    locationBtn.addEventListener("click", () => {
        showTab(location);
    });

    if (firstTimeOnPage) {
        showTab(home);
        firstTimeOnPage = false;
    }

}

changeTabs();




