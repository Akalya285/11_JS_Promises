const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Function to fetch and print cat names
const fetchCatNames = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catNames = cats.map(cat => cat.name);
    console.log(catNames);
  } catch (error) {
    console.error('Error fetching cat names:', error);
  }
};

// Call the function
fetchCatNames();
