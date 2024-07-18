import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import Feed from './pages/feed';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/details/:id" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
