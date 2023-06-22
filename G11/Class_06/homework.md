# Star wars fanpage

## Requirements

- Create navigation that will contain the following nav links: Home, People, Planets,
  each navlink should navigate to the coresponding component: /home, /people, /planets

1.  When the user is on /home display the Home page and display information about all starwars films

- In the home component use the api url: https://swapi.dev/api/films/ to get the information about all the films.
- Display information about the movie's: title, opening_crawl, director, producer and it's release date

2. When the user is on /people display the People page and display information about starwars characters.

- In this component use the api url: https://swapi.dev/api/people to get information about starwars characters.
- Display infomration about the character's: name, heigth, gender, birthyear.

3. Make one more route with path param called: /character/:id

- When the user clicks on the character card (the information about the starwars character done in step 2) navigate
  to this route.
- The component that you will render when the this route is hit should be called SingleCharacter.
- In this component you should display more information by the character itself.
- The information you should display when we are in this component is:  
  character's: name, heigth, gender, birthyear, and information about the homeworld of this character.
  The information about the homeworld should be homeworld's: name, diameter, climate, gravity, terrain, population.
- Have a back button, that will actually navigate the user back to the home page
  NOTE: PLEASE PAY ATTENTION ON THE RESPONSE THAT YOU GET ABOUT THE CHARACTER DETAILS, SO YOU FIND OUT HOW CAN YOU GET INFORMATION ABOUT THE HOMEWORLD

NOTE: I haven't specified how you should separate you components and what components you should make. That is on free will. Feel free on you own imagination and inspiration to granually separate you component.
Don't put to much effort on styling, feel free to use styling libraries =).

BONUS: On the people page, when you make api call you retrieve the information about the first 20 characters. Implemenet pagination with 2 buttons, next and previous.
When next is clicked display the next 20 characters, when previous is clicked display previous 20 characters.

EXTRA-BONUS: When you are on planets page, use the URL https://swapi.dev/api/planets to get information about the planets, and display it on the screen

BIG-NOTE: Don't focus on bonuses if the mendatory requirements arent finished. Bonuses are not mendatory, they are for additional challenge.
