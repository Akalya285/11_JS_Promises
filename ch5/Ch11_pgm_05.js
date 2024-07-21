const countriesAPI = 'https://restcountries.com/v2/all';

// Function to fetch and print country details
const fetchCountryDetails = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    countries.forEach(country => {
      const { name, capital, languages, population, area } = country;
      console.log(`Name: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages.map(language => language.name).join(', ')}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log('---------------------------');
    });
  } catch (error) {
    console.error('Error fetching country details:', error);
  }
};

// Call the function
fetchCountryDetails();
