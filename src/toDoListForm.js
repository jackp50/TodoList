import { addToDo } from "./todoListCreation";
import { addListButton } from "./home";
import "./styles.css";


function createInput(labelText, type, name, placeholder) {
    const container = document.createElement("div");
    container.classList.add("input-container");

    const label = document.createElement("label");
    label.textContent = labelText;
    label.classList.add("input-label");

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.required = true;
    input.placeholder = placeholder;
    input.classList.add("input-field");

    container.appendChild(label);
    container.appendChild(input);
    return container;
}

export function listCreationForm() {
    // Check if form already exists
    let formContainer = document.getElementById("todo-form");

    if (!formContainer) {
        formContainer = document.createElement("div");
        formContainer.id = "todo-form";
        formContainer.classList.add("form-container");
        formContainer.style.display = "none"; 
        document.body.appendChild(formContainer);

        const form = document.createElement("form");
        form.classList.add("dialog-form");
        formContainer.appendChild(form);

        // Close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "✖";
        closeButton.classList.add("close-button");
        closeButton.addEventListener("click", () => {
            form.reset(); 
            formContainer.style.display = "none";
        });
        form.appendChild(closeButton);

        // Create input fields
        form.appendChild(createInput("Title", "text", "title", "Enter title"));
        form.appendChild(createInput("Description", "text", "description", "Enter description"));
        form.appendChild(createInput("Due Date", "text", "dueDate", "Enter due date"));

        // Priority dropdown
        const priorityContainer = document.createElement("div");
        priorityContainer.classList.add("input-container");

        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        priorityLabel.classList.add("input-label");

        const prioritySelect = document.createElement("select");
        prioritySelect.name = "priority";
        prioritySelect.required = true;
        prioritySelect.classList.add("select-field");

        const priorityOptions = ["High", "Medium", "Low"];
        priorityOptions.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            prioritySelect.appendChild(option);
        });

        priorityContainer.appendChild(priorityLabel);
        priorityContainer.appendChild(prioritySelect);
        form.appendChild(priorityContainer);

        // Completed checkbox
        const completedContainer = document.createElement("div");
        completedContainer.classList.add("input-container");

        const completedLabel = document.createElement("label");
        completedLabel.textContent = "Completed";
        completedLabel.classList.add("input-label");

        const completedCheckbox = document.createElement("input");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "completed";
        completedCheckbox.classList.add("ml-2");

        completedContainer.appendChild(completedLabel);
        completedContainer.appendChild(completedCheckbox);
        form.appendChild(completedContainer);

        // Submit button
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        submitButton.classList.add("submit-button");
        form.appendChild(submitButton);

        // Form submission logic
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Capture values
            const title = form.querySelector('[name="title"]').value;
            const description = form.querySelector('[name="description"]').value;
            const dueDate = form.querySelector('[name="dueDate"]').value;
            const priority = prioritySelect.value;
            const completed = completedCheckbox.checked;

            console.log("New To-Do:", { title, description, dueDate, priority, completed });

            // Reset form and hide it
            addToDo(title, description, dueDate, priority, completed);
            form.reset();
            formContainer.style.display = "none";
        });
    }
    formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
}