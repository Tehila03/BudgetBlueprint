// profile.js

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the DOM elements we need
  const newProjectForm = document.querySelector(".new-project-form");
  const projectList = document.querySelector(".panel-block");
  const deleteButtons = document.querySelectorAll(".button.is-danger");

  // Function to handle form submission for creating a new project
  function handleNewProjectFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const projectName = document.querySelector("#project-name").value;
    const projectFunding = document.querySelector("#project-funding").value;
    const projectDesc = document.querySelector("#project-desc").value;

    // Do something with the form data (e.g., send it to the server)
    // ...

    // Clear the form fields after submission
    newProjectForm.reset();
  }

  // Attach the form submission event listener
  newProjectForm.addEventListener("submit", handleNewProjectFormSubmit);

  // Function to handle project deletion
  function handleProjectDeletion(event) {
    // Get the project ID from the data attribute
    const projectId = event.target.dataset.id;

    // Do something with the project ID (e.g., send a request to delete the project)
    // ...

    // Remove the project from the UI
    event.target.closest(".columns.mb-2").remove();
  }

  // Attach click event listeners to each delete button
  deleteButtons.forEach((button) =>
    button.addEventListener("click", handleProjectDeletion)
  );
});
