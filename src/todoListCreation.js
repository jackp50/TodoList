export let toDoArray = [];
    //constructor for todoItem
    class toDoItem {
        constructor(title, description, dueDate, priority, completed) {
            this.id = crypto.randomUUID();
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.completed = completed;
        }
    }

    //function to display
    export function displayToDos() {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Clear previous items before rendering
    
        //loop through each item and create an element for each
        toDoArray.forEach((todo, index) => {
            const todoElement = document.createElement("div");
            todoElement.classList.add("todo-item");

        //delete button
         // Create delete button
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "Delete";
         deleteButton.addEventListener("click", () => deleteToDo(index));
    
            // Display title, description, and due date
            todoElement.innerHTML = `
                <h3>${todo.title}</h3>
                <p>${todo.description}</p>
                <p>Due: ${todo.dueDate}</p>
                <p>Priority: ${todo.priority}</p>
                <p>Status: ${todo.completed ? "Completed" : "Uncompleted"}</p>
            `;
            todoElement.appendChild(deleteButton);
            main.appendChild(todoElement);
        });
    }

     // add an item to the toDo list
    export function addToDo(id, title, description, dueDate, priority, completed) {
        const newToDo = new toDoItem(id, title, description, dueDate, priority, completed);
        toDoArray.push(newToDo);
        console.log(toDoArray);
        displayToDos();
    }

    //delete item function
    export function deleteToDo(index) {
        toDoArray.splice(index, 1); 
        displayToDos(); 
    }

