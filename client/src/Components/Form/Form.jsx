import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, getTypes } from "../../Redux/Actions/actions";
import styles from "./Form.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const validation = (input) => {
    let errors = {};
    let life = Number(input.life);
    let attack = Number(input.attack);
    let defense = Number(input.defense);
    let speed = Number(input.speed);
    let height = Number(input.height);
    let weight = Number(input.weight);

    if (!input.name) {
      errors.name = "name is required";
    } else if (/[^A-Za-z0-9 ]+/g.test(input.name)) {
      errors.name = "Name cannot contain special characters ' ' or ','";
    }

    if (!input.life) {
      errors.life = "life is required";
    } else if (life <= 0 || life > 100) {
      errors.life = "life value should be between 1 and 100";
    }

    if (!input.attack) {
      errors.attack = "attack is required";
    } else if (attack <= 0 || attack > 100) {
      errors.attack = "attack value should be between 1 and 100";
    }

    if (!input.defense) {
      errors.defense = "defense is required";
    } else if (defense <= 0 || defense > 100) {
      errors.defense = "defense value should be between 1 and 100";
    }

    if (!input.speed) {
      errors.speed = "speed is required";
    } else if (speed <= 0 || speed > 100) {
      errors.speed = "speed value should be between 1 and 100";
    }

    if (!input.height) {
      errors.height = "height is required";
    } else if (height <= 0 || height > 50) {
      errors.height = "height value should be between 1 and 50";
    }

    if (!input.weight) {
      errors.weight = "weight is required";
    } else if (weight <= 0 || weight > 1000) {
      errors.weight = "weight value should be between 1 and 1000";
    }

    if (!input.types || !input.types.length) {
      errors.types = "Please select a type";
    }

    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput((state) => {
      if (e.target.name === "types") {
        if (!state.types.includes(e.target.value) && state.types.length < 2) {
          return {
            ...state,
            types: [...state.types, e.target.value],
          };
        } else {
          return { ...state };
        }
      } else {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.life ||
      !input.attack ||
      !input.defense ||
      !input.speed ||
      !input.height ||
      !input.weight ||
      !input.types
    ) {
      return alert("Please complete all the fields");
    }
    dispatch(addPokemon(input));
    alert("Pokemon Created Successfully!");
    setInput({
      name: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.form}>
            <div className={styles.txtInput}>
              <div className={styles.txtField}>
                <input
                  name="name"
                  type="text"
                  value={input.name}
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.name && <p>{error.name}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="life"
                  type="number"
                  value={input.life}
                  placeholder="Life"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.life && <p>{error.life}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="attack"
                  type="number"
                  value={input.attack}
                  placeholder="Attack"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.attack && <p>{error.attack}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="defense"
                  type="number"
                  value={input.defense}
                  placeholder="Defense"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.defense && <p>{error.defense}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="speed"
                  type="number"
                  value={input.speed}
                  placeholder="Speed"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.speed && <p>{error.speed}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="height"
                  type="number"
                  value={input.height}
                  placeholder="Height"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.height && <p>{error.height}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <input
                  name="weight"
                  type="number"
                  value={input.weight}
                  placeholder="Weight"
                  onChange={(e) => handleChange(e)}
                />
                <div className={styles.message}>
                  {error.weight && <p>{error.weight}</p>}
                </div>
              </div>
              <div className={styles.txtField}>
                <select
                  name="types"
                  id="types"
                  onChange={(e) => handleSelect(e)}
                >
                  <option>types</option>
                  {types.length &&
                    types.map((type) => (
                      <option key={type.id} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className={styles.formButton}>
              <button type="submit" enabled className={styles.createBtn}>
                CREATE
              </button>
            </div>
          </div>
        </form>
        <div className={styles.selectedTypes}>
          {input.types
            ? input.types.map((i, index) => (
                <button
                  className={styles.typeBtn}
                  key={index}
                  onClick={() => handleDelete(i)}
                >
                  {i} <span className={styles.deleteBtn}></span>
                </button>
              ))
            : alert("Type already selected")}
        </div>
      </div>
    </div>
  );
};
