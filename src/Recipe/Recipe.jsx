import React from "react";
import "./style.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="col-xs-6  col-md-3">
      <div className="row">
        <div className="jumbotron">
          <div className="col-xs-4 item-photo">
            <img src={image} alt={title} className="rounded" />
          </div>

          <div className="col-xs-6">
            <h3>{title}</h3>

            <ol className="list-group">
              {ingredients.map(ingredient => (
                <li className="list-group-item" key={ingredient.text}>
                  {ingredient.text}
                </li>
              ))}
            </ol>

            <p>{calories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
