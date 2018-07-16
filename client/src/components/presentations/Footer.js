import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand text-danger font-weight-bold" href="/">
            Neflix
          </a>
          <p className="text-muted lead" href="#">
            &copy;2017. All Rights Reserved by Chiu.
          </p>
          <a
            className="navbar-brand text-muted"
            href="https://github.com/yuchiu/netflix-clone"
          >
            github
          </a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
