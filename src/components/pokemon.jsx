import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => {
                // not the actual JSON response body but the entire HTTP response
                return response.json();
            })
            .then((response) => {
                // we now run another promise to parse the HTTP response into usable JSON
                setNames(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleFetchAllPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then((response) => {
                // not the actual JSON response body but the entire HTTP response
                return response.json();
            })
            .then((response) => {
                // we now run another promise to parse the HTTP response into usable JSON
                setNames(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <button onClick={handleFetchAllPokemon}>Fetch All Pokemon</button>
            {names.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <p>{pokemon.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Pokemon;