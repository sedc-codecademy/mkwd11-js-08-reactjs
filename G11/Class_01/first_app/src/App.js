import logo from './logo.svg';
import './App.css';
import SongList from './components/SongList/SongList.js'
//JSX


function App() {
  const fullName = 'John Doe';
  const role = 'lecturer';

  const favouriteFood = 'Sarma';
  const movies = ['Harry Potter', 'John Wick', 'Demon Slayer'];

  const printMessage = (text) => {
    return text
  };

  const lightBlue = {
    color: 'lightblue'
  }

  const shouldMessagesBeShown = false;

  return (
    <div className="App">
      <h1>Hello from our first react application!</h1>
      <p>In this module we are about to learn key concepts of React.</p>
      <hr />

      <h1 style={lightBlue} >Hi, my name is {fullName}, and I am {role} in SEDC.</h1>
      <hr />

      <div>
        {/* Exerice
        'My favourite food is {FOODNAME}, and my top 3 movies are: {MOVIEONE}, {MOVIETWO}, {MOVIETHREE}'
      */}
        <p style={{
          color: 'purple',
          textTransform: 'uppercase'
        }}>
          My favourite food is: {favouriteFood}, and my top 3 movies are: {movies[0]}, {movies[1]}, {movies[2]}.
        </p>

        <hr />

        <div className="container">
          <h3>Today date is: {new Date().toDateString()}</h3>
          <p>{printMessage('JSX is fun isnt it :D')}</p>
          <p>{printMessage('JSX')} is one of the key concepts in react.</p>
        </div>

        <hr />

        {/* 
        - Calling the component
        it has self closing tag, such as html elements
        - SongList will inherit all the classes from
        it's parent component, so be careful.
         */}
        <SongList />


         <hr />

         {/* Conditional rendering with ternary operator */}
         {
          shouldMessagesBeShown ? <h4>Message is shown to the user this and that</h4> : <h4>Message shown if it is false</h4>
         }
      </div>
    </div>
  );
}



export default App;
