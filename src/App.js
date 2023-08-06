import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Movie from './components/singleMovies/SingleMovie';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movies/:id' element={<Movie />} />
    </Routes>
  );
}

export default App;
