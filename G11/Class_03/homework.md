# Starwars fan page

## Requirements:

- Create a class component called CharactersPage, and invoke it in App.jsx

- Inside CharactersPage, initialize the component state with a property called characters, initially set to an empty array.
- Implement the componentDidMount() lifecycle method in CharactersPage.
- Within componentDidMount(), make an API request using the fetch function to retrieve character data from the following URL: https://swapi.dev/api/people.
- Once the character data is fetched and received successfully, update the characters state property with the retrieved data.
- Create a class component called Character that accepts a character prop.
- Inside the Character component, display the following information dynamically: name, height, gender, and birth year, using the data passed through the character prop.
- Within the CharactersPage component, map over the characters array in the state, and for each character, render a Character component, passing the character data as a prop.

- NOTE: Style the page as per your preference, utilizing basic CSS or CSS frameworks to enhance the user experience.But please have in mind and do not put to much attention to the css and styling since this is React class.
