// Fetch the user's profile data from the API endpoint
fetch('/api/users/profile')
  .then(response => response.json())
  .then(data => {
    // Pass the profile data to the Handlebars template
    const profileTemplate = Handlebars.compile(document.getElementById('profile-template').innerHTML);
    const profileHtml = profileTemplate(data);

    // Update the profile container with the rendered HTML
    document.getElementById('profile-container').innerHTML = profileHtml;
  })
  .catch(error => {
    console.error(error);
    alert('Failed to fetch profile data.');
  });

// Function to calculate the cost of living
const calculateCostOfLiving = async (city, income) => {
    const url = 'https://cities-cost-of-living1.p.rapidapi.com/get_city_by_name';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b7f78328f1msh650327bb4a94881p13a6d2jsn2e27c4098761',
        'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com',
      },
      body: new URLSearchParams({
        name: city,
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // Perform calculations or comparisons with the cost of living data and user's income
      const costOfLivingData = result.data;
  
      // Return the calculated data or relevant response
      return {
        city,
        costOfLivingData,
        income,
      };
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while calculating the cost of living.');
    }
  };
  
  // Event listener for the profile form submission
  document.querySelector('.update-profile-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const city = document.querySelector('#city').value.trim();
    const income = parseInt(document.querySelector('#income').value.trim());
    const jobTitle = document.querySelector('#job-title').value.trim();
  
    try {
      // Calculate the cost of living
      const calculatedData = await calculateCostOfLiving(city, income);
  
      // Update the profile with the calculated data
      const profileTemplate = Handlebars.compile(document.getElementById('profile-template').innerHTML);
      const profileHtml = profileTemplate({
        username: '{{username}}', // Update with the username data
        city: calculatedData.city,
        income: calculatedData.income,
        jobTitle: jobTitle,
        projects: '{{projects}}', // Update with the projects data
      });
  
      // Update the profile container with the rendered HTML
      document.getElementById('profile-container').innerHTML = profileHtml;
    } catch (error) {
      console.error(error);
      alert('Failed to update the profile.');
    }
  });
  
