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

        //edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            openEditForm(index);
        });


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
            todoElement.appendChild(editButton);
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


    //edit button function
    function openEditForm(index) {
        const todo = toDoArray[index];
    
        document.querySelector('[name="title"]').value = todo.title;
        document.querySelector('[name="description"]').value = todo.description;
        document.querySelector('[name="dueDate"]').value = todo.dueDate;
        document.querySelector('[name="priority"]').value = todo.priority;
        document.querySelector('[name="completed"]').checked = todo.completed;
    
        document.getElementById("todo-form").style.display = "block";
    
        const submitButton = document.querySelector(".submit-button");
        submitButton.textContent = "Update";
        submitButton.onclick = function(event) {
            event.preventDefault();
            
            // Update the item in the array
            todo.title = document.querySelector('[name="title"]').value;
            todo.description = document.querySelector('[name="description"]').value;
            todo.dueDate = document.querySelector('[name="dueDate"]').value;
            todo.priority = document.querySelector('[name="priority"]').value;
            todo.completed = document.querySelector('[name="completed"]').checked;
    
            displayToDos();
            document.getElementById("todo-form").style.display = "none";
            submitButton.textContent = "Submit"; // Reset button text
        };
    }