import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import './App.css'

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;