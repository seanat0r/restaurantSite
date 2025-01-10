//Import JS files
import { mainContent } from "./smallRepetitiveFunctions";
import { createDiv } from "./smallRepetitiveFunctions";

export default class Menu {
    #imgDiv = null; // Div für Bilder
    #contentDiv = null; // Haupt-Content-Div

    /**
     * Erstellt das Layout mit einem Bild-Div und einem Content-Div.
     */
    createLayout() {
        const divImg = createDiv("IMG_DIV_ID"); // Ersetze 'IMG_DIV_ID' mit der spezifischen ID, z. B. 'aboutImg'
        const divContent = createDiv("CONTENT_DIV_ID"); // Ersetze 'CONTENT_DIV_ID' mit der spezifischen ID, z. B. 'aboutContent'

        mainContent.appendChild(divImg);
        mainContent.appendChild(divContent);

        this.#imgDiv = document.querySelector("#IMG_DIV_ID");
        this.#contentDiv = document.querySelector("#CONTENT_DIV_ID");
    }

    /**
     * Erstellt das Bild-Layout mit einem Alt-Text.
     */
    createImgLayout() {
        if (!this.#imgDiv) {
            return console.log("#IMG_DIV_ID doesn't exist");
        }

        const img = document.createElement("img");
        img.setAttribute("id", "IMG_ID"); // Ersetze 'IMG_ID' mit einer spezifischen ID, z. B. 'aboutPicture'
        img.alt = "ALT_TEXT"; // Ersetze 'ALT_TEXT' mit dem Alt-Text des Bildes
        this.#imgDiv.appendChild(img);
    }

    /**
     * Erstellt das Text-Layout mit einem Wrapper, einer Überschrift und einem Paragraphen.
     */
    createTextLayout() {
        if (!this.#contentDiv) {
            return console.log("#CONTENT_DIV_ID doesn't exist");
        }

        const wrapper = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        wrapper.setAttribute("id", "WRAPPER_ID"); // Ersetze 'WRAPPER_ID' mit einer spezifischen ID, z. B. 'aboutWrapper'
        h1.setAttribute("id", "TITLE_ID"); // Ersetze 'TITLE_ID' mit einer spezifischen ID, z. B. 'aboutTitle'
        p.setAttribute("id", "TEXT_ID"); // Ersetze 'TEXT_ID' mit einer spezifischen ID, z. B. 'aboutText'

        wrapper.append(h1, p);
        this.#contentDiv.appendChild(wrapper);
    }

    /**
     * Fügt Textinhalt zur Überschrift und zum Paragraphen hinzu.
     */
    fillText() {
        const h1 = document.querySelector("#TITLE_ID");
        const p = document.querySelector("#TEXT_ID");

        if (!h1 || !p) {
            return console.log("#TITLE_ID or #TEXT_ID doesn't exist");
        }

        h1.textContent = ""; // Ersetze mit dem spezifischen Titel, z. B. "About Us"
        p.textContent = ""; // Ersetze mit dem spezifischen Text, z. B. "Welcome to our about page..."

        h1.textContent = "TITLE_TEXT"; // Ersetze 'TITLE_TEXT' mit der Überschrift
        p.textContent = "CONTENT_TEXT"; // Ersetze 'CONTENT_TEXT' mit dem Paragraphen-Text
    }

    // Getter für die Bild- und Content-Divs
    get imgDiv() {
        return this.#imgDiv;
    }

    get contentDiv() {
        return this.#contentDiv;
    }
}