import React from 'react';
import GlobalContext from './utilities/GlobalContex';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <GlobalContext>
      <Header />
      <Body />
      <Footer />
    </GlobalContext>
  );
}

export default App;