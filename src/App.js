import './App.css';
import Clock from "./Clock.js"
import imageSpiderman from "./assets/joey-nicotra-0EI_4R2r0qg-unsplash.jpg"

const content = {
  greeting: "Welcome",
  announcement: "To the future!"
}
const user = {
  name: "Peter",
  lastname: "Parker",
  occupation: "Spider-Man"
}

function toUppercase (word) {
  return word.toUpperCase()
}

function App() {
  return (
    <div className="App">
      <h1>{content.greeting}</h1>
      <p>{content.announcement}</p>
      <Clock/>
      <p>Oh oh, it´s Hero Time!</p>
      <p>Hurry {user.name} {user.lastname},
       you are <br></br>{toUppercase(user.occupation)}!</p>
       <img src={imageSpiderman}></img>
    </div>
  )
}

export default App;
