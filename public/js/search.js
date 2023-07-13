const SearchHandler = async (event) => {

    const city = document.querySelector('#searchinput').value.trim();
  
    if (city) {
      const response = await fetch(`/api/search/${city}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
      //   document.location.replace('/profile');
        
      // attach response to handlebars**
      } else {
        alert('No search results.');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document
    .querySelector('#searchbtn')
    .addEventListener('click', SearchHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);