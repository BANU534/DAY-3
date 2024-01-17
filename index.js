//a. Get all the countries from Asia continent/region using the Filter function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);
  })
  .catch(error => console.error('Error fetching data:', error));

//b. Get all the countries with a population of fewer than 2 lakhs using the Filter function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

 //c. Print the following details name, capital, flag, using forEach function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      if (country.name && country.capital && country.flags) {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital[0]);
        console.log('Flag:', country.flags.svg);
        console.log('---');
      } else {
        console.error('Invalid country data:', country);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));

//d. Print the total population of countries using reduce function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

//e. Print the country that uses US dollars as currency:
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usDollarCountries = data.filter(country =>
      country.currencies && country.currencies.hasOwnProperty('USD')
    );
    console.log('Countries using US dollars:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));

