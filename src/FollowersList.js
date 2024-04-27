import React, { useState } from 'react';
import './RecipeList.css';
import './App.css';

function FollowersList({ onClose }) {
  const [savedFollowers, setSavedFollowers] = useState([
    { id: 1, username: "kendall"},
    { id: 2, username: "roman" },
    { id: 3, username: "shiv" },
    { id: 4, username: "logan" },
    { id: 5, username: "tony" },
    { id: 6, username: "carmela" },
    { id: 7, username: "aj" },
    { id: 8, username: "meadow" },
    { id: 9, username: "christopher" },
    { id: 10, username: "adriana" }
  ]);

  return (
    <div className='recipe-list-container'>
      <ul className="list-group list-group-flush">
        {savedFollowers.map(follower => (
          <li key={follower.id} className="list-group-item recipe-item">
              <h3>{follower.username}</h3>
          </li>
        ))}
      </ul>
      <button className="close" onClick={onClose}>&times;</button>
    </div>
  );
}

export default FollowersList;
