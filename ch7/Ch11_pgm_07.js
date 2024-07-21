const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Function to fetch and find the average weight of cats in metric units
const fetchCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    let totalWeight = 0;
    let count = 0;

    cats.forEach(cat => {
      const weight = cat.weight.metric.split(' - ').map(Number);
      const avgWeight = (weight[0] + weight[1]) / 2;
      totalWeight += avgWeight;
      count++;
    });

    const averageWeight = totalWeight / count;
    console.log(`Average weight of cats: ${averageWeight.toFixed(2)} kg`);
  } catch (error) {
    console.error('Error fetching cat weights:', error);
  }
};

// Function to fetch and find the 10 largest countries by area
const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    const sortedCountries = countries.sort((a, b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10).map(country => country.name);

    console.log('10 largest countries by area:', largestCountries);
  } catch (error) {
    console.error('Error fetching largest countries:', error);
  }
};

// Function to fetch and count the total number of official languages in the world
const fetchTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    const languagesSet = new Set();

    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name);
      });
    });

    const totalLanguages = languagesSet.size;
    console.log(`Total number of official languages: ${totalLanguages}`);
  } catch (error) {
    console.error('Error fetching languages:', error);
  }
};

// Call the functions
fetchCatWeight();
fetchLargestCountries();
fetchTotalLanguages();
