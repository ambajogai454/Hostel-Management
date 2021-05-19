import React, { Component } from 'react'
import './Footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


export class Footer extends Component {
    render() {
        return (
            <div>
    <footer class="mainfooter" role="contentinfo" style={{backgroundColor:'#001f3f'}}>
    <div class="footer-middle">
    <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
    
        <div class="footer-pad">
          <h4>QUICK LINKS</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Home">FAQS</a></li>
            <li><a href="/Home">News and Updates</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4 >Categories</h4>
          <ul class="list-unstyled">
           
            <li><Link to="/">&nbsp;Home</Link></li>
            <li><Link to="/register">&nbsp;Register</Link></li>
            <li><Link to="/login">&nbsp;Login</Link></li> 
            <li><Link to="/contact">&nbsp;Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Related</h4>
          <ul class="list-unstyled">
            <li><a href="#">An online hostel management system ensures that record management and flawless execution of administrative tasks such as managing hostel applications, registration forms, allotment of rooms, fees management, mess payment management, disciplinary issues and easy communication with students and parents            </a></li>
            {/* {/* <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li> 
              <a href="#"></a>
            </li> */}
          </ul>
        </div>
      </div>
      
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle list-inline"  style={{listStyleType:'none'}}>
             <li><a href="https://www.facebook.com/OnlineBookShop06/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
             <li><a href="https://www.instagram.com/invites/contact/?i=149ccvcu06pqf&utm_content=krkskjx" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
            </ul>				
		</div>
    </div>
    <hr/>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2021 - Hostel Management System. All rights reserved.</p>
		</div>
	</div>
  </div>
  </div>
</footer>         
</div>
);
    }
}

export default Footer;

		 {/* <div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				 <div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i class="fa fa-angle-double-right"></i>Imprint</a></li>
					</ul>
				</div> 
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                    <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
					</ul>
				</div>
                <hr/>
				</div>	
			    <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
					<p><u>Online Books Store.© All right Reversed</u></p>
					
				</div>
				<hr/>
			</div>	
		</div>
	</section>  */}