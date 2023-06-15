# Exercise Requirement: User Registration Form

- You are tasked with creating a user registration form using React functional components and the useState hook. The form should collect the following information from the user: fullName, email, password

## Requirements:

- Create a functional component called RegistrationForm.
- Inside the RegistrationForm component, use the useState hook to manage the state of the form fields (full name, email, and password).
- Display the form fields and provide an input field for each piece of information.
- Include appropriate labels for each input field.
- When the user types in any of the input fields, update the state accordingly using the useState hook.
- Create a submit button to process the form.
- Create one more state property: registeredUsers that initially is empty array.
- On form submission, save the "created user" in the registeredUsers array.
- Create one more functional component "UsersRegistered"
- Provide the registeredUsers state in the component "UsersRegistered" and display them on the screen.
- In the component "UsersRegistered" make one more button called: Remove Users
- When Remove Users is clicked should remove all the users from the list.
