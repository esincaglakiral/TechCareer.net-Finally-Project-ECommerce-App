import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom';

const JeweleryList = () => {
  const [products, setProducts] = useState([])
  const value = useContext(DataContext)
   
  useEffect(() => {
   
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res =>{
          console.log(res)
          setProducts(res)
      })
      .catch(err=>{
          console.log(err)
      })
  },[])
    const handleAddProduct = value.handleAddProduct
  return (
    <div className='products'> 
        
        {
           
            products.filter(products => products.category==="jewelery").map(product =>(
              <div className='card' key={product.id}>
              <Link to= {`/products/${product.id}`}> 
              {/* resme tıkladığımızda ilgili ürünün id'sine yönlendiricek */}
                <img src={product.image} alt=''/>
              </Link>
   
              <div className='box'>
                 <h3 title = {product.title}>
                   <Link to={`/products/${product.id}`}>{product.title}</Link>  </h3>
                   {/* title'a tıkladığımızda ilgili ürünün id'sine yönlendiricek */}

                 <h5>Rate: {product.rating?.rate} &nbsp;<i class="fas fa-heart"></i> &nbsp;  &nbsp; Stock: {product.rating?.count}</h5> 
                 <br></br>
                 <p>{product.description}</p>
                 <h4>Price: {product.price}&nbsp;$</h4>
                 <button onClick={() => handleAddProduct(product)}>
                   Add to Cart
                   </button>
              </div>
   
            </div>
                
              ))
        }
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
    </div>
  )
}

export default JeweleryList