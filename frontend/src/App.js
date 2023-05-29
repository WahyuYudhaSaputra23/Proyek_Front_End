import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="add" element={<AddProduct/>}/>
      <Route path="edit/:id" element={<EditProduct/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
