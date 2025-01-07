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
        if(!imgDiv) {
            return console.log(imgDiv + "doesn't exist");
        }
        
        const img = document.createElement("img");
        img.setAttribute("id", "homePicture");
        img.alt = "Eating Hall from our Restaurant";
        this.#imgDiv.appendChild(img);
        
    }
}



