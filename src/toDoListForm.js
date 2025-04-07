import { addToDo } from "./todoListCreation";
import { addListButton } from "./home";

export function listCreationForm() {

    const dialog = document.createElement('dialog');
    document.body.appendChild(dialog);
    const form = document.createElement('form');
    dialog.appendChild(form);
    // title input
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.placeholder = 'Title';
    titleInput.required = true;
    form.appendChild(titleInput);

    //description input
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Description';
    descriptionInput.required = true;
    form.appendChild(descriptionInput);

    //dueDate input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'text';
    dueDateInput.name = 'dueDate';
    dueDateInput.placeholder = 'Due Date';
    dueDateInput.required = true;
    form.appendChild(dueDateInput);

    //priority input
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    prioritySelect.required = true;

    // Placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = "Select Priority";
    placeholderOption.value = "";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    prioritySelect.appendChild(placeholderOption);

    // Priority options
    const priorityOptions = ["High", "Medium", "Low"];
    priorityOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
     prioritySelect.appendChild(option);
    });

    form.appendChild(prioritySelect);

    //completed input
    const completedLabel = document.createElement('label');
    completedLabel.textContent = "Completed";

    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.name = 'completed';

    completedLabel.appendChild(completedCheckbox);
    form.appendChild(completedLabel);

    //submitButton
    const submitButton = document.createElement('button', { type: 'submit' }, 'Submit');
    form.appendChild(submitButton);

     // Add event listeners
    //  loadHome();
     addListButton.addEventListener("click", () => {
        dialog.showModal(); // Opens the dialog as a modal
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        // Get values from user input fields
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const completed = completedCheckbox.value;
    
        // Debugging: Confirm values
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Due Date:", dueDate);
        console.log("Priority:", priority);
        console.log("Completed:", completed);
    
        // Call addToDo with user input values
        addToDo(title, description, dueDate, priority, completed);
        form.reset();
        dialog.close();
    });

}