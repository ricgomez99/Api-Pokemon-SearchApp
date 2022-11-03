import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails, cleanDetail } from "../../Redux/Actions/actions";

export const PokemonDetails = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  console.log(details);
  const { id } = props.match.params;
  useEffect(() => {
    dispatch(getPokemonDetails(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <img src={details.img} alt={details.name} />
        <h2>{details.name}</h2>
        <p>{details.id}</p>
        <p>{details.life}</p>
        <p>{details.attack}</p>
        <p>{details.defense}</p>
        <p>{details.speed}</p>
        <p>{details.height}</p>
        <p>{details.weight}</p>
        <div>
          <h2>Types</h2>
          <ul>
            {details.types && details.types.length ? (
              details.types.map((type) => (
                <div key={type.id}>
                  <li>{type.name}</li>
                </div>
              ))
            ) : (
              <p>No types available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
