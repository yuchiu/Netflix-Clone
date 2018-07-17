import React from "react";

const Slider = () => (
  <div className="slider">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid"
            src="https://s-media-cache-ak0.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Stranger Things</h3>
              <p className="sub-title">
                <b>97% Match 2016 TV-14 season 1</b>
                <br />
                <br />
                Phasellus a nulla vitae augue convallis efficitur.<br />
                Nam gravida viverra velit venenatis elementum.<br />
                Phasellus egestas volutpa
              </p>
              <p className="sub-title">
                Cast:
                <br />
              </p>
              <p className="castGenreList">
                Phasellus egestas, volutpat tortor, eget eleifend, massa
              </p>
              <p className="sub-title">
                Genres:
                <br />
              </p>
              <p className="castGenreList">volutpat tortor, massa</p>
              <button type="button" className="addListBtn">
                +
              </button>MY LIST
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="https://resi.ze-robot.com/dl/wa/wallpaper-i-made-from-the-new-blade-runner-2049-reveal-trailer-multiple-albums-1920%C3%97811.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Blade Runner 2047</h3>
              <p className="sub-title">
                <b>97% Match 2016 TV-14 season 1</b>
                <br />
                <br />
                Phasellus a nulla vitae augue convallis efficitur.<br />
                Nam gravida viverra velit venenatis elementum.<br />
                Phasellus egestas volutpa
              </p>
              <p className="sub-title">
                Cast:
                <br />
              </p>
              <p className="castGenreList">
                Phasellus egestas, volutpat tortor, eget eleifend, massa
              </p>
              <p className="sub-title">
                Genres:
                <br />
              </p>
              <p className="castGenreList">tortor, eleifend</p>
              <button type="button" className="addListBtn">
                +
              </button>MY LIST
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="http://www.studiorjm.net/wp-content/uploads/2013/10/Gravity.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Gravity</h3>
              <p className="sub-title">
                <b>97% Match 2016 TV-14 season 1</b>
                <br />
                <br />
                Phasellus a nulla vitae augue convallis efficitur.<br />
                Nam gravida viverra velit venenatis elementum.<br />
                Phasellus egestas volutpa
              </p>
              <p className="sub-title">
                Cast:
                <br />
              </p>
              <p className="castGenreList">
                Phasellus egestas, volutpat tortor, eget eleifend, massa
              </p>
              <p className="sub-title">
                Genres:
                <br />
              </p>
              <p className="castGenreList">Phasellus, volutpat</p>
              <button type="button" className="addListBtn">
                +
              </button>MY LIST
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Slider;
