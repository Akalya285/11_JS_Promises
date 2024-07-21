const url = 'https://restcountries.com/v2/all'; // countries API

fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data);
  })
  .catch(error => console.error('Error fetching countries:', error)); // handling error if something wrong happens
