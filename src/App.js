import React from 'react';
import './App.css';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import MainPage from './MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Recipe1 from './Recipe1';
import AboutUsPage from './AboutUsPage';
import RecipeAdd from './RecipeAdd';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/Recipe1' element={<Recipe1 />}></Route>
      <Route path='/aboutus' element={<AboutUsPage />}></Route>
      <Route path='/AddRecipe' element={<RecipeAdd />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
