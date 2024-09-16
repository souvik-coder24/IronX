import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './Body';
import Search from './pages/SearchExercises';
import Course from './pages/Course';
import DietForm from './components/DietForm/DietForm';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Price from './pages/Price';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/course' element={<Course />} />
        <Route path='/search' element={<Search />} />
        <Route path='/pricing' element={<Price />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/Diet' element={<DietForm/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;