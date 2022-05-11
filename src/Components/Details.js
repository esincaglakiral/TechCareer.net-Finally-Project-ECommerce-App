import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DataContext } from './DataProvider'
import { baseService } from '../network/service/ApiCall';
import NotFound from './NotFound'


export default function Details() {


  const value = useContext(DataContext)
  const handleAddProduct = value.handleAddProduct
  const [product, setProduct] = useState([]);
  const { productId } = useParams();


  useEffect(() => {
    getProducts();
  });

  
  const getProducts = async () => {
    try {
      const data = await baseService.get(`/products/${productId}`);
      setProduct(data);
    } catch (err) {
      console.log('[ERROR]: ', err);
    }
  }


  return (
    <div>
      {product ? (


        <div className='details'>
          <h3 className='productDetail'>Product Detail</h3>
          <div className='imgContainer' >
            <img src={product.image} alt='' />
          </div>
          <div className='boxDetails'>
            <h2 title={product.title}>{product.title}</h2>
             <h5>Product Category: &nbsp;{product.category}</h5>
            <h5>Rate: {product.rating?.rate} &nbsp; <i class="fas fa-heart"></i> &nbsp;  &nbsp; Stock: {product.rating?.count}</h5>
            <p>{product.description}</p>
            <h3>Price: {product.price}&nbsp;$</h3>
            <Link to="/cart" className='cart' onClick={() => handleAddProduct(product)}>Add to Cart</Link>
          </div>

        </div>

      ) : (<NotFound />)
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
  );
}