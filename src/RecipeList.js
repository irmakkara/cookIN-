import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipeList.css';

function RecipeList({ onClose }) {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId=localStorage.getItem('couserid');
    axios.get('http://localhost:8080/api/savedrecipes/user/'+userId)
      .then(response => {
        setSavedRecipes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the recipes!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error loading recipes.</p>
        <pre>{error.message}</pre> 
      </div>
    );
  }

  return (
    <div className='recipe-list-container'>
      <ul className="list-group list-group-flush">
        {savedRecipes.map(recipe => (
          <li key={recipe.recipeid} className="list-group-item recipe-item">
            <Link to={"/Recipe?recipeid=" + recipe.recipeid} className="recipe-link">
              <h5>{recipe.titles}</h5>
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