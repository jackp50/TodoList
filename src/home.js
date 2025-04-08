import { add } from "date-fns";
import { toDoArray } from "./todoListCreation";
import { displayToDos } from "./todoListCreation";
export let addListButton;

export function loadHome() {
    //css grid
    const container = document.getElementById("container");
    const sideBar = document.createElement("div");
    sideBar.id = "side-bar";
    container.appendChild(sideBar);

    const main = document.createElement("div");
    main.id = "main";
    container.appendChild(main);

    const newProject = document.createElement("div");
    newProject.id = "new-project";
    container.appendChild(newProject);
    const newList = document.createElement("div");
    newList.id = "new-list";
    container.appendChild(newList);

    addListButton = document.createElement("button");
    addListButton.classList.add(
        "bg-green-500", "hover:bg-green-700", "text-white", "font-bold",
        "py-2", "px-4", "rounded-full"
    );
    addListButton.id = "new-todo-list";
    newList.appendChild(addListButton);
    addListButton.innerHTML = "Add new ToDo list item";
}
    