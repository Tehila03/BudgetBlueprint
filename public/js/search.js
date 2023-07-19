const SearchHandler = async (event) => {

    const city1 = document.querySelector('#searchinput').value.trim();
    const city2 = document.querySelector('#futureinput').value.trim();
    if (city1&&city2) {
      const response = await fetch(`/api/search`, {
        method: 'POST',
        body: JSON.stringify({city1,city2}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const result = calculateDifference(data.homeCity, data.destinationCity);
        console.log(result);
        let HTML = ``
      //   document.location.replace('/profile');
        
      // attach response to handlebars**
      } else {
        alert('No search results.');
      }
    }
  };
  function calculateDifference(city1, city2){
    const homeCity = city1.col_index
    const destinationCity = city2.col_index
    const result = ((destinationCity - homeCity)/homeCity)*100
    return result
  }
 
  
  document
    .querySelector('#searchbtn')
    .addEventListener('click', SearchHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);