import Navbar from './Components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Landing from './pages/Landing';
import ALLproducts from './Components/ALLproducts';
import Footer from './Components/Footer';
import About from './pages/About';




function App() {
  return (
   <div className ="w-screen  min-h-screen ">
    <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element ={<Landing/>}></Route>
        <Route path='/search' element = {<Home/>}></Route> 
       <Route path='/product/:id' element ={<Product/>}></Route>
       <Route path='/allCollection' element={<ALLproducts></ALLproducts>}></Route>
       <Route path='/about' element={<About></About>}></Route>
    </Routes>

    <Footer></Footer>
   </div>
  );
}

export default App;
