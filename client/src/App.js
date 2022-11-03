import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Form } from "./Components/Form/Form";
import { Home } from "./Components/Home/Home";
import { PokemonDetails } from "./Components/PokemonDetails/PokemonDetails";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <NavBar />
          <h1>Henry Pokemon</h1>
          <Route exact path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/pokemons/:id" component={PokemonDetails} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
