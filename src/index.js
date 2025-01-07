import "./style.css";

import Home from "./homeModule.js";
import About from "./aboutModule.js";
import Menu from "./MenueModule.js";
import Location from "./LocationModule.js";

const about = new About();
const home = new Home();
const menu = new Menu();
const location = new Location();

home.createHomeLayout();
home.createImgLayout();



