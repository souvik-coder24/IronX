import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './Body';
import Search from './pages/SearchExercises';
import Course from './pages/Course';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/course' element={<Course />} />
        <Route path='/search' element={<Search />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;