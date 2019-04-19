import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./food.module.css";

const Foods = () => {
  const APP_ID = "2e864fb6";
  const APP_KEY = "1b176879a80ca43a15a991fe48a6d838";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  useEffect(() => {
    getRecipes();
    console.log("blblablabla");
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="RecipeApp container-fluid">
      <form className="searchform form" onSubmit={getSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={updateSearch}
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Button
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Foods;
