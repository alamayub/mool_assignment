import React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import ViewSearch from './pages/view'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/view" element={ <ViewSearch /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
