import Gethttp from "./Axios";

export default function GetBanner() {
  return (
    <div>
      <header className="header-layout shadow-sm fixed-top">
        <div className="header-wrapper ">
          <div className="header-upperlayout ">
            <div className="header-upperlayout-logo">
              <a href="/">
                <img src="logo.png" width={160} height={50}></img>
              </a>
            </div>
            <div className="header-upperlayout-content">
              <a href="/upload" class="link-dark">
                프로젝트 올리기
              </a>
              <a class="btn btn-outline-secondary" href="/login" role="button">
                <img src="login.jpg"></img>
                로그인/회원가입
              </a>
            </div>
          </div>

          {/* navbar */}
          <div className="header-lowerlayout">
            <nav class="navbar">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="/category"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  카테고리
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/category/1">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="category/2">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="category/3">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <a class="btn btn-outline-secondary" href="/home" role="button">
                홈
              </a>
              <a
                class="btn btn-outline-secondary"
                href="/popular"
                role="button"
              >
                인기
              </a>
              <a class="btn btn-outline-secondary" href="/new" role="button">
                신규
              </a>
              <a
                class="btn btn-outline-secondary"
                href="/endedAt"
                role="button"
              >
                마감임박
              </a>
            </nav>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
      {/* main wrapper */}

      <main className="main-wrapper">
        <section className="main">
          <div className="main-top">
            <div className="imagesection">
              <div
                id="carouselSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="carousel1.jpg" class="d-block w-auto" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="carousel2.jpg" class="d-block w-auto" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="carousel3.jpg" class="d-block w-auto" alt="..." />
                  </div>
                </div>
              </div>
              <div className="imagesection-content">
                <h1>head</h1>
                <h2>body</h2>
                <h3>indicator 추가</h3>
                <h4>
                  현재 slide index <p></p>가져오는 함수 추가
                </h4>
              </div>
            </div>

            <div className="project">
              <h1>project</h1>
              <h2>contents</h2>
              <h3>image</h3>
            </div>
          </div>
          <aside className="main-side">
            <h1>side</h1>
            <h2>contents</h2>
            <h3>image</h3>
          </aside>
        </section>
        <div className="contents">
          <h1>contents</h1>
          <h2>contents</h2>
          <h3>image</h3>
        </div>
        <div className="contents">
          <h1>contents</h1>
          <h2>contents</h2>
          <h3>image</h3>
        </div>
        <div className="contents">
          <h1>contents</h1>
          <h2>contents</h2>
          <h3>image</h3>
        </div>
        <div id="contents-last" className="contents">
          <h1>contents</h1>
          <h2>contents</h2>
          <h3>image</h3>
        </div>
      </main>
      <footer className="footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}
