import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css';

function RecipeList({ onClose }) {
  const [savedRecipes, setSavedRecipes] = useState([
    { id: 1, title: "Makarna", summary: "Sade makarna." },
    { id: 2, title: "Recipe 2", summary: "Summary for Recipe 2" },
    { id: 3, title: "Recipe 3", summary: "Summary for Recipe 3" },
    { id: 4, title: "Recipe 4", summary: "Summary for Recipe 4" }
  ]);

  return (
    <div className='recipe-list-container'>
      <ul className="list-group list-group-flush">
        {savedRecipes.map(recipe => (
          <li key={recipe.id} className="list-group-item recipe-item">
            <Link to={`/Recipe${recipe.id}`} className="recipe-link">
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.summary}</p>
          </li>
        ))}
      </ul>
      <button className="close" onClick={onClose}>&times;</button>
    </div>
  );
}

export default RecipeList;
