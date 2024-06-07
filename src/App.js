import React from 'react';
import './App.css';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import MainPage from './MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipe1 from './Recipe1';
import AboutUsPage from './AboutUsPage';
import RecipeAdd from './RecipeAdd';
import Re from './Re';
import Ev from './Ev';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Recipe' element={<Recipe1 />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/AddRecipe' element={<RecipeAdd />} />
        <Route path='/Re' element={<Re />} />
        <Route path='/Ev' element={<Ev />} />
      </Routes>
    </Router>
  );
}

export default App;
