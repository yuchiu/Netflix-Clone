import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <div className = "footer-container">
          <nav className='navbar'>
  
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">More</a></li>
            </ul>
  
          </nav>
        </div>
    )
  }

}

export default Footer;