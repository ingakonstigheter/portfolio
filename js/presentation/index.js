import data from "../data/index.js";


let projects = data.storedProjects.projects;
function createElement(elem) {
    return document.createElement(elem);
}

function appendElement(children, parent) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

function setChild(data, element, className) {
    let elem = document.querySelector("id");
}

function setProjectsPreview(parent) {
    for (const project of projects) {
        let li = createElement("li");
        let article = createElement("article");
        article.className = "project-card";
        let img = createElement("img");
        img.src = project.img;
        let h = createElement("h3");
        h.innerHTML = project.name;
        let p = createElement("p");
        p.innerHTML = project.description;
        let btn = createElement("button");
        btn.innerHTML = "Show More";

        const children = [img, h, p, btn];

        appendElement(children, article);
        children.length = 0;
        children.push(article);
        appendElement(children, li);
        document.querySelector(".carousel").appendChild(li);
    }
}

function setProjects(parent) {
    for (const project of projects) {
        let li = createElement("li");
        let article = createElement("article");
        article.className = "project-card";
        let img = createElement("img");
        img.src = project.img;
        let h = createElement("h3");
        h.innerHTML = project.name;
        let p = createElement("p");
        p.innerHTML = project.description;

        const children = [img, h, p, btn];
        appendElement(children, article);
        children.length = 0;
        children.push(article);
        appendElement(children, li);
        document.querySelector(".carousel").appendChild(li);
    }
}

setProjectsPreview("carousel")
