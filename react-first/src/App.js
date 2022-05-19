import logo from './logo.svg';
import nature from './image/nature.jpg';
import Contact from './contact';
import Address from './address';
import Comment from './comment';
import './App.css';

function App() {
  let myTitle = "Welcome to react js learning camp";
  return (
    <p>
      <header>
        <img src={nature} alt= "image not found" width="100%" height="200" ></img>
        {/* this is calling of function component of react js  */}
        <Address></Address>
        <Contact></Contact>
      </header>
      <div className="thbs-text">
        <h2>{myTitle}</h2>
        <Contact></Contact>
        <Comment></Comment>
      </div>
    </p>
  );
}
export default App;
