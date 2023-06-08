# Exercise 1: Functional Component

- Create a functional component called Card that takes in three props: title and content and imageUrl.
- Inside the component, render a "div" element that displays the title in an "h2" heading and the content in a p paragraph, and the imageUrl in "img".
- Invoke the Card component in the App component at least 5 times with different values. Make sure atleast one of the card's component props values are variable.

# Exercise 1.5: Functional Component

- Create a functional component Academies
- Render this component in App.
- The component should accept 2 props: acedemies (array of academy objects), name.
- In "h2" Element print the name property
- In "div" map through the academies and render each academy with it's props. The academy name should be in "h3", and description in "p"
- NOTE: Academy object should look as {id: string, name: string, description: string}

- BONUS: Create class component Acedemy, that will accept one prop called academy (this is the academy object). In the previous requirement, when iterating
  though the array of academies instead of rendering the "h3" and "p" with the coresponding values, render this component Academy and provide the academy object as props.
  Now the "h3" and "p" should be part of the Academy component and should render the coresponding values.

# Exercise 2: Class Component and State Management

- Create a class component called Counter that has an initial state value of count set to 0.
- Render a "div" element that displays the current value of count inside a "p" paragraph.
- Additionally, include two buttons labeled "Increment" and "Decrement" below the displayed count.
- When the "Increment" button is clicked, the count state should be increased by 1, and when the "Decrement" button is clicked, the count state should be decreased by 1.
  - BONUE: Ensure that the count value does not go below 0.
- Create button "Reset" and when clicked should set the count to 0.
- Create a "span" element next to the count that displays the word "Even" if the current count is an even number, and "Odd" if count is odd number.
- Render the Count component in the App Component.
- Add input type:number, when the field changes on user input, update the count state to the new value. (HINT: use onChange event)
