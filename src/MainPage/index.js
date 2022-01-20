import "./index.css";
import Gethttp from "./Axios";

function MainPage() {
  const url = "http://localhost:3000/";
  const data = Gethttp(url);
  console.log(data);
  return (
    <div>
      {/* Navigation */}
      <div className="header shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand">
              <img src="logo192.png" width={50} height={50} />
              CyrpoProject
            </a>
            <form className="d-flex">
              <a className="navbar-signin" href="/#">
                로그인/회원가입
              </a>
            </form>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container px-4 px-lg-5">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    카테고리
                  </a>
                  <ul
                    id="category"
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/#">
                        게임장르1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        게임장르2
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        마이페이지
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    홈
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    인기
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    신규
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* Body - banner */}
      <div className="banner">
        <div id="banner" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="/GameBanner/game_1.jpg"
                className="d-block w-100"
                alt="..."
                onClick={function () {
                  alert("first");
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/GameBanner/game_2.jpg"
                className="d-block w-100"
                alt="..."
                onClick={function () {
                  alert("second");
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/GameBanner/game_3.jpg"
                className="d-block w-100"
                alt="..."
                onClick={function () {
                  alert("third");
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#banner"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#banner"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Body - list */}
        <div id="banner-list" className="list-group">
          <a
            href="/#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            The current link item
          </a>
          <a href="/#" className="list-group-item list-group-item-action">
            A second link item
          </a>
          <a href="/#" className="list-group-item list-group-item-action">
            A third link item
          </a>
          <a href="/#" className="list-group-item list-group-item-action">
            A fourth link item
          </a>
          <a
            href="/#"
            className="list-group-item list-group-item-action disabled"
            tabIndex="-1"
            aria-disabled="true"
          >
            A disabled link item
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
