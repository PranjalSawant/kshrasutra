import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Details } from './components/Details';
import { PilesPage } from './pages/PilesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FissurePage } from './pages/FissurePage';
import { FistulaPage } from './pages/FistulaPage';
import { PilonidalPage } from './pages/PilonidalPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { Form } from './pages/Form';
import ScrollToTop from './components/ScrollToTop';
import { AboutUsPage } from './pages/AboutUsPage';
import { Results } from './pages/ResultsPage';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
      <Header/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/details/:index" component={<Details />} /> */}
          <Route path='/piles' element={<PilesPage/>}/>
          <Route path='/fissure' element={<FissurePage/>}/>
          <Route path='/fistula' element={<FistulaPage/>}/>
          <Route path='/pilonidal' element={<PilonidalPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
