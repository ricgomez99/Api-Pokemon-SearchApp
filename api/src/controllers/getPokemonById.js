const { Pokemon, Types } = require("../db");
const axios = require("axios");

const getPokemonById = async (id) => {
  if (id.length > 2) {
    let pokemonDetail = await Pokemon.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Types,
          through: { attributes: [] },
        },
      ],
    });
    let pokemon = {
      id: pokemonDetail.id,
      name: pokemonDetail.name,
      life: pokemonDetail.hp,
      attack: pokemonDetail.attack,
      deffense: pokemonDetail.deffense,
      speed: pokemonDetail.speed,
      height: pokemonDetail.height,
      weight: pokemonDetail.weight,
      types:
        pokemonDetail.types.length < 2
          ? [pokemonDetail.types[0].dataValues.name]
          : [
              pokemonDetail.types[0].dataValues.name,
              pokemonDetail.types[1].dataValues.name,
            ],
    };
    return pokemon;
  }
};

module.exports = getPokemonById;
