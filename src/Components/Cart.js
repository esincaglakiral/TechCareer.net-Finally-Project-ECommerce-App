import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { baseService } from '../network/service/ApiCall';
import { Link } from 'react-router-dom';



export default function Cart() {

  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;


  const totalPrice = cart.reduce(
  (price, item) => price + item.quantity * item.price, 0);
       

 const handleReductionProduct = (product) =>{
  const ProductExist = cart.find((item) => item.id === product.id);
  if(ProductExist.quantity === 1){
    setCart(cart.filter((item) => item.id !== product.id));
  }
  else{
    setCart(
      cart.map((item) => item.id === product.id 
      ? {...ProductExist, quantity: ProductExist.quantity - 1}:item)
    );
  }
};




  const handleIncreaseProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
     if(ProductExist){
       setCart(cart.map((item) => item.id === product.id ? 
       {...ProductExist, quantity: ProductExist.quantity + 1}:item)
      );
     }
     else{
       setCart([...cart,{...product, quantity:1}]);

     }
  }



  const handleCartClear = id => {
    if(window.confirm("Are you sure you want to remove this product from the cart?")){
        cart.forEach((item, index) => {
            if(item.id === id){
                cart.splice(index, 1)
            }
        })
        setCart([...cart])
    }
}




  if (cart.length === 0)
    return <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "400" }}>Cart is empty</h2>





 const handleAddOrder = async () => {
   try {
     if (cart.length > 0) {
       const products = cart.map((num) => ({
         productId: num.id,
         quantity: num.quantity,
       }));
       const dates = new Date();
       const newData = { userId: 5, date: dates, products: products };
       await baseService.post("/carts", newData);
       console.log("Your order has been successfully created. Thank you for choosing us.", newData);
       setCart([]);
      
     } else {
       throw new Error("[ERROR]: Your Cart is empty");
     }
   } catch (err) {
     console.log("[ERROR]:", err);
   }
    console.log(cart);
 };



  return (
    <>
      {

        cart.map(product => (
          <div className='cart' key={product.id}>

            <div className='imgBox' >
              <img src={product.image} alt='' />
            </div>
            <div className='boxCart'>
              <h2 title={product.title}>{product.title}</h2>
              <h5>Rate: {product.rating?.rate} &nbsp;&nbsp; Stock: {product.rating?.count}</h5>
              <h3>Price: &nbsp;{product.price}&nbsp;{product.currency}</h3>

              <div className='amount'>
                <button className='count' onClick={() => handleReductionProduct(product)}>-</button>
                <span>{product.quantity}</span>
                <button className='count' onClick={() => handleIncreaseProduct(product)}>+</button>
              </div>

              <div className='delete' onClick={() => handleCartClear(product.id)}>X</div>
            </div>

          </div>
        ))
      }
      <div className='total'>
        <button className='payment' onClick={handleAddOrder}>Payment</button>
        <h3>Total: $ {totalPrice}</h3>
      </div>

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
    </>
  )
}