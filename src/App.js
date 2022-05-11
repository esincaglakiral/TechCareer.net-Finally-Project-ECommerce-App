import React from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './Components/DataProvider';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Home from './Components/Home';
import MenCategoryList from './Components/MenCategoryList';
import WomenCategoryList from './Components/WomenCategoryList';
import ElectronicsList from './Components/ElectronicsList';
import JeweleryList from './Components/JeweleryList';
import OrderList from './Components/OrderList';
import NotFound from './Components/NotFound';
import LoginForm from './Components/LoginForm';
import ContactForm from './Components/ContactForm';



function App() {
  return (
   

  <DataProvider>
    <div className="App">

      <Router>
        <Header />
         <section>
          <Routes>
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<Details />} />
            <Route path='cart' element={<Cart />} />
            <Route path='home' element={<Home />} />
            <Route path="/orderlist" element={<OrderList/>}/>
            <Route path='mencategorylist' element={<MenCategoryList />} />
            <Route path='womencategorylist' element={<WomenCategoryList />} />
            <Route path='electronicslist' element={<ElectronicsList />} />
            <Route path='jewelerylist' element={<JeweleryList />} />
            <Route path="*" element={<NotFound />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='contact' element={<ContactForm/>} />
          </Routes>
        </section>
      </Router>
    </div>
  </DataProvider>
    
  );

}

export default App;
