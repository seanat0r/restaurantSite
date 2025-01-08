import "./style.css";

import Home from "./homeModule.js";
import About from "./AboutModule.js";
import Menu from "./MenueModule.js";
import Location from "./LocationModule.js";

const about = new About();
const home = new Home();
const menu = new Menu();
const location = new Location();

home.createHomeLayout();
home.createImgLayout();
home.createTextLayout();
home.fillText();



