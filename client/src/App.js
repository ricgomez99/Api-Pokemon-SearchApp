import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Form } from "./Components/Form/Form";
import { Main } from "./Components/Main/Main";
import { Home } from "./Components/Home/Home";
import { PokemonDetails } from "./Components/PokemonDetails/PokemonDetails";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/form" component={Form} />
            <Route path="/pokemons/:id" component={PokemonDetails} />
          </div>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
