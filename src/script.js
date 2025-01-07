import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";
export class Home {
    createHomeLayout() {
        createDiv("img" + "home").appendChild(mainContent);
    }
}

export class Menu {}

export class About {}

export class Location {}


