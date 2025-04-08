import "./styles.css";
import { loadHome } from "./home";
import { newToDoListItem } from "./todoListCreation";
import { listCreationForm } from "./toDoListForm";
function startWebsite() {
    loadHome();
    document.getElementById("new-todo-list").addEventListener("click", listCreationForm);
}

startWebsite();