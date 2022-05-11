import { baseService } from '../network/service/ApiCall';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const OrderList = () => {

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrders();
    getProductDetail();
  }, [orders]);

  //#region Fetch orders
  const getOrders = async () => {
    try {
      const data = await baseService.get("/carts/user/3");
      setOrders(data);
    } catch (err) {
      console.log("[ERROR]: ", err);
    }
  };

  const getProductDetail = async () => {
    try {
      const data = await baseService.get(`/products/`);
      setProducts(data);
    } catch (err) {
      console.log("[ERROR]: ", err);
    }
  };






  return(
   <main className="main">
      <section className="section">
        <h1 className="order">
          Your Orders
        </h1>
        <table>
        <tr className='tablerow'>
            <th className='row'>Image</th>
            <th  className='row'>Title</th>
            <th  className='row'>Quantity</th>
          </tr>
        </table>
      <table  className="orderlist">

        {orders.map((order) => (
          <div
            key={order.id}>
         
       
            <div className="order-list">
            
            {order.products.map((product) => (
              
              <tr key={product.productId}>
                {
                  products.filter((p) => p.id === product.productId).map(product =>
                    (<div key={product.id} className="row">
                     <td> <img src={product.image} alt="product" className="productImg"/></td>
                     <td>
                      <Link to={`/products/${product.id}`}>
                      <h5 className="productTitle">{product.title}</h5>
                      </Link></td>
                    </div>))
                }
                
              <td> <p className="productQuantity">Quantity: {product.quantity}</p></td> 
              
            </tr>
              
            ))}
            
            </div>
          </div>
          
        ))}
      </table>
      </section>
      <footer>
            <div class="footer-content">
            <h3>ShoppingCenter E-Commerce Web Site</h3>
            <h4>Designed & Coded by Esin Çağla Kıral</h4>
            <p>Thank you for visiting our content, we wish you a pleasant shopping. You can navigate to the relevant pages from the links below.Also, if you want to reach us, you can use the link below.</p>
            <ul class="socials">
            <li><a href='https://github.com'><i class='fab fa-github'></i></a></li>
                <li><a href='https://www.linkedin.com'><i class='fab fa-linkedin'></i></a></li>
                <li><a href='https://www.facebook.com'><i class='fab fa-facebook-square'></i></a></li>
               
            
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright © <li className='logo'><Link to='/'>ShoppingCenter</Link></li>  </p>
                <p className='phone'><i class='fas fa-phone-alt'></i>+222 1234567</p>

                <p className='mail'><i class="material-icons">mail_outline</i></p>

                <p className='location'><i class="material-icons">location_on</i></p>

                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                       
                      </ul>
                    </div>
        </div>
            
            </footer>
    </main>
    
  )





};

export default OrderList;















































// import React, { useEffect, useState } from 'react'

// const OrderList = () => {
//   const [categoryList, setCategoryList] = useState([])
//   useEffect(() => {
//     getOrders()
//   }, [])

//   const getOrders = () => {
//     fetch("https://northwind.vercel.app/api/orders")
//       .then(response => response.json())
//       .then(data => setCategoryList(prev => data.filter(item => item.customerName === "cagla")))

//   }
//   console.log("orders:", categoryList);
//   return (
//     <div><h1>Orders Page</h1>
//       <table>
//         <tr>
//           <th>ProductID</th>
//           <th>Title</th>
//           <th>Category</th>
//           <th>Quantity</th>
//           <th>Total Price</th>
//         </tr>
//         {categoryList.map((item, key) => {
//           return <tr>
//             <td>{item.productID}</td>
//             <td>{item.title}</td>
//             <td>{item.category}</td>
//             <td>{item.quantity}</td>
//             <td>{item.totalPrice}</td>
//           </tr>
//         })}
//       </table>
//     </div>

//   )
// }

// export default OrderList