import React, { useState } from 'react';
import './RecipeList.css';
import './App.css';

function FollowingList({ onClose }) {
  const [savedFollowing, setSavedFollowing] = useState([
    { id: 1, username: "kendall"},
    { id: 2, username: "roman" },
    { id: 3, username: "shiv" },
    { id: 4, username: "logan" },
    { id: 5, username: "tony" }
  ]);

  return (
    <div className='recipe-list-container'>
      <ul className="list-group list-group-flush">
        {savedFollowing.map(following => (
          <li key={following.id} className="list-group-item recipe-item">
              <h3>{following.username}</h3>
          </li>
        ))}
      </ul>
      <button className="close" onClick={onClose}>&times;</button>
    </div>
  );
}

export default FollowingList;
