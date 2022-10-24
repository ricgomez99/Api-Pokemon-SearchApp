const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const createPokemon = require("../controllers/createPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const router = Router();

router.get("/pokemons", async (req, res) => {
  try {
    const pokemons = await getPokemons();
    res.send(pokemons);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await getPokemonById(id);
    res.send(pokemon);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    let { name, life, attack, defense, speed, height, weight, types } =
      req.body;
    const pokemon = await createPokemon(
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    res.status(201).send({ create: "ok", pokemon: pokemon });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
