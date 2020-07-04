import React from 'react';
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Game from './Components/Game/Game';
import Footer from './Components/Footer';
import Rules from './Components/Rules/Rules'
import About from './Components/About/About'
import { Route, BrowserRouter } from 'react-router-dom';



const App = () => {
  return(
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='page-content'>
          <Route path='/Game' component={Game}/>
          <Route path='/Rules' component={Rules}/>
          <Route path='/About' component={About}/>
        </div>        
        <Footer />       
      </div>
    </BrowserRouter>
  );
}

export default App;
