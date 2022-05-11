import React from 'react'
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
   <div className='contactForm'>
<section id="contact">
  <div class="contact-box">
    <div class="contact-links">
      <h2>CONTACT</h2>
      <div class="links">
        <div class="link">
          <a href='https://www.linkedin.com'><i class='fab fa-linkedin'></i></a>
        </div>
        <div class="link">
          <a  href='https://github.com'><i class='fab fa-github'></i></a>
        </div>
        <div class="link">
          <a  href='/'><i class="material-icons">contact_mail</i></a>
        </div>
      </div>
    </div>
    <div class="contact-form-wrapper">
      <form>
        <div class="form-item">
          <input type="text" name="sender" required/>
          <label>Name:</label>
        </div>
        <div class="form-item">
          <input type="text" name="email" required/>
          <label>Email:</label>
        </div>
        <div class="form-item">
          <textarea class="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button class="submit-btn">Send</button>  
      </form>
    </div>
  </div>
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
</div>
  )
}

export default ContactForm