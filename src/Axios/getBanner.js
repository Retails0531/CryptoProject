import Gethttp from "./Axios";
import Carousel from "./carousel";
import PreviousNextMethods from "../Axios/carousel";

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
              <PreviousNextMethods />
            </div>

            <div className="project">
              <h1>Guide</h1>
              <h2>신규공지</h2>
              <h3>image</h3>
              <h1>Guide</h1>
              <h2>웹 이용가이드 작성</h2>
              <h3>image</h3>
            </div>
          </div>
          <aside className="main-side">
            <div className="side-head">
              <div className="side-name">인기 프로젝트</div>
              <a class="btn btn-outline-secondary" href="/login" role="button">
                <u>전체 보기</u>
              </a>
            </div>
            <div className="side-date">00/00/00 기준</div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">1</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">2</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">3</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">4</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">5</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">6</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">7</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>

            <div className="side-contents">
              <div id="side-image">
                <img id="side-image" src="/GameBanner/game_1.jpg"></img>
              </div>
              <div id="side-number">8</div>
              <div className="side-box">
                <div id="side-category">카테고리/카테고리</div>
                <div id="side-name">게임 제목</div>
                <div id="side-rate">100% 달성</div>
              </div>
            </div>
          </aside>
        </section>
        <div className="contents">
          <h1>인기 장르</h1>
        </div>

        <div className="contents">
          <h1>급상승</h1>
        </div>
        <div id="contents-last" className="contents">
          <h1>공개 예정</h1>
        </div>
      </main>
      <footer className="footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}
