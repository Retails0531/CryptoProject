import Gethttp from "./Axios";

function GetHeader() {
  const url = "/dummy.json";
  const data = Gethttp(url).category;

  return (
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  {data &&
                    data.map((category, index) => {
                      return (
                        <li className="category-list" key={index}>
                          <a
                            className="dropdown-item"
                            href={category.url}
                            key={index}
                          >
                            {category.name}
                          </a>
                        </li>
                      );
                    })}

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
  );
}

export default GetHeader;
