import axios from "axios";
import React, { useState, useContext } from "react";
import { CharacterContext } from "./CharacterContext";

function Search() {
  const { setData, data } = useContext(CharacterContext);
  const [search, setSearch] = useState(" ");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loadCharacters();
  };

  const loadCharacters = async () => {
    const response = await axios.get(
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=db9aff8a7d1e4e87b0f79aec52180b67&query=${search}&minProtein=20&minFat=20&minCarbs=20&minCalories=20&number=2`
      `https://www.superheroapi.com/api.php/498573768115797/search/${search}`
    );
    const results = response.data.results;
    setData(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <input
          className="border-2 border-gray-300 pr-20 h-8 rounded w-2/3 focus:outline-none"
          type="text"
          onChange={handleChange}
          value={search}
        />
        <button
          className="bg-blue-500 text-white rounded w-20 h-8 hover:bg-grey-lightest"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
