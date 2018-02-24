import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div>
    		<footer className="footer-distributed">

    			<div className="footer-right">

    				<a href="#"><i className="fa fa-facebook"></i></a>
    				<a href="#"><i className="fa fa-twitter"></i></a>
    				<a href="#"><i className="fa fa-linkedin"></i></a>
    				<a href="#"><i className="fa fa-github"></i></a>

    			</div>

    			<div className="footer-left">

    				<p className="footer-links">
    					<a href="#">About</a>
    					·
    					<a href="#">Faq</a>
    					·
    					<a href="#">Contact</a>
    				</p>

    				<p>Tasker App &copy; 2018</p>
    			</div>

    		</footer>
      </div>
    )
  }
}

export default Footer;
