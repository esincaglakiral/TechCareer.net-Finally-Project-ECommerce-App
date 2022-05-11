import React, { useState, useContext } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/xmark-solid.svg'
import Cart from './svg/cart.svg'
import { Link } from 'react-router-dom'
import { DataContext } from './DataProvider'



export default function Header() {
  const [menu, setMenu] = useState(false)
  const value = useContext(DataContext)
  const [cart] = value.cart


  const toogleMenu = () => {
    setMenu(!menu)
  }
  const styleMenu = {
    left: menu ? 0 : "-100%"
  }
  return (
    <header className="App-header">

      <div className='menu' onClick={toogleMenu}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className='logo'>
        <h1><Link to='/'>ShoppingCenter</Link></h1>
      </div>

      <ul style={styleMenu}>
        <li className='home'><Link to='/home'> <i class="fa fa-home"> Home</i></Link></li>
        <li>

          <div className='dropdown'>

              <button className='dropbtn'>CATEGORIES</button>

              <div className='content'>
              <Link to="/mencategorylist" className='category'>Men's Clothing</Link>
              <Link to="/womencategorylist" className='category'>Women's Clothing</Link>
              <Link to="/electronicslist" className='category'>Electronics</Link>
              <Link to="/jewelerylist" className='category'>Jewelery</Link>
              </div>

          </div>

          </li> 
        
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/contact'><i class="fa fa-fw fa-envelope"></i> Contact</Link></li>
        <li><Link to='/login'><i class="fa fa-fw fa-user"></i> Login</Link></li>
        <li><Link to='/orderlist'>Order</Link></li>
        <li onClick={toogleMenu}>
          <img src={Close} alt="" width="30" className='menu' />
        </li>
      </ul>

      <div className='cartIcon'>
         <span>{cart.length}</span>
         <Link to="/cart">
          <img src={Cart} alt="" width="20" /> 
          
         </Link>

      </div>


    </header>
  )
}
