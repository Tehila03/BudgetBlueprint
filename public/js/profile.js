


function handleBackToSearchClick() {
  // Redirect the user to the search page
  window.location.href = '/search'; 
}


document.addEventListener("DOMContentLoaded", function () {
  // Get references to the DOM elements we need
  const newProjectForm = document.querySelector(".new-project-form");
  const projectList = document.querySelector(".panel-block");
  const deleteButtons = document.querySelectorAll(".button.is-danger");

 
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
  // newProjectForm.addEventListener("submit", handleNewProjectFormSubmit);


  function handleProjectDeletion(event) {
    // Get the project ID from the data attribute
    const projectId = event.target.dataset.id;

    // Do something with the project ID (e.g., send a request to delete the project)
    // ...

  
    event.target.closest(".columns.mb-2").remove();
  }


  deleteButtons.forEach((button) =>
    button.addEventListener("click", handleProjectDeletion)
  );

  // Create the "Back to Search" button element
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Search';
  backButton.classList.add('button', 'is-primary', 'is-outlined', 'mt-2');

  // Attach the click event listener to the "Back to Search" button
  backButton.addEventListener('click', handleBackToSearchClick);
  projectList.appendChild(backButton);

  


});

