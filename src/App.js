
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Cart from './components/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
