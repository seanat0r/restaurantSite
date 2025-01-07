export const mainContent = document.querySelector("#content");

export const createDiv = (idName) => {
    const div = document.createElement("div");
    div.setAttribute("id", idName);
    return div;
};