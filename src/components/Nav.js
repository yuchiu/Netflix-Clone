import React from 'react';
import {Link} from 'react-router-dom'
import {NavLink}  from 'react-router-dom'


class Nav extends React.Component {



  handleChange(e) {
    this
      .props.actions
      .fetchSearch(e.target.value)
  }

  handleDelete() {

    console.log('search input is cleared, route back to home page');
  }


  render() {
    return (
      <div>
        <nav className='navbar'>

          <ul>
            <li>
              <NavLink to='/' className="logo"><img
                style={{
        width: 110,
        height: 30
      }}
                src="https://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/a/a1/Netflix-logo.png/revision/latest?cb=20150221002257"/>
              </NavLink>
            </li>
            <li>
              <NavLink to='/search' className="browse">Browse<img
                style={{
        width: 30,
        height: 10
      }}
                src="http://freaktraining.com/wp-content/uploads/2017/02/RedDownArrow.png"/>
                </NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <form
                className="search"
                >
                <img
                  style
                  ={{
                  width: 30,
                  height: 30
                }}
                  src="http://tendenzen.plamen.org/img/search.png"/>
                <input
                  className="searchInput"
                  type='text'
                  placeholder='title, people, genre'
                  onChange={this
                  .handleChange
                  .bind(this)}
                  />
                  <button className ="clearBtn" onClick={this.handleDelete.bind(this)}>X</button>
                  <Link type = 'submit' className ="" to='/search' >go </Link>
              </form>

            </li>
          </ul>

        </nav>
      </div>
    )
  }

}

export default Nav;
