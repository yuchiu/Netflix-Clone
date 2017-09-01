import React from 'react';

class Nav extends React.Component {

  handleChange(e) {
    this
      .props.actions
      .fetchSearch(e.target.value)
  }


  render() {
    return (
      <div>
        <nav className='navbar'>

          <ul>
            <li>
              <a href='./' className="logo"><img
                style={{
        width: 110,
        height: 30
      }}
                src="https://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/a/a1/Netflix-logo.png/revision/latest?cb=20150221002257"/>
              </a>
            </li>
            <li>
              <a className="browse" href='#'>Browse<img
                style={{
        width: 30,
        height: 10
      }}
                src="http://freaktraining.com/wp-content/uploads/2017/02/RedDownArrow.png"/></a>
            </li>
          </ul>

          <ul>
            <li>
              <form
                className="search">
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
                  .bind(this)}/>
              </form>

            </li>
          </ul>

        </nav>
      </div>
    )
  }

}

export default Nav;
