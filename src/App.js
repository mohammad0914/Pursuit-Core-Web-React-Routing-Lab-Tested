import "./App.css";
import { Route } from "react-router-dom";
import DogRandom from "./components/DogRandom";
import CatRandom from "./components/CatRandom";
import DogRandomWithId from "./components/DogRandomWithID";
import CatRandomWithId from "./components/CatRandomWithId";
import Breed from "./components/Breed";

function App() {
  return (
    <div className="app">
      <Route path="/dog/random" component={DogRandom} exact />
      <Route path="/cat/random" component={CatRandom} exact />
      <Route path="/dog/random/:id" component={DogRandomWithId} exact />
      <Route path="/cat/random/:id" component={CatRandomWithId} exact />
      <Route path="/breed" component={Breed} exact />

    </div>
  );
}

export default App;
