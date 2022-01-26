import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import "./index.css";
import Slider from "react-slick";
import Gethttp from "./Axios";

function MainPage() {
  const url1 = "/dummy.json";
  const data1 = Gethttp(url1).carousel;

  const url2 = "/dummy2.json";
  const data2 = Gethttp(url2).top;

  const url3 = "/dummy3.json";
  const data3 = Gethttp(url3).top;

  const url4 = "/dummy4.json";
  const data4 = Gethttp(url4).top;

  const url5 = "/dummy5.json";
  const data5 = Gethttp(url5).top;

  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;

  const settingsSliderNav1 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const settingsSliderNav2 = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
              <a href="/upload" className="link-dark">
                프로젝트 올리기
              </a>
              <a
                className="btn btn-outline-secondary"
                href="/login"
                role="button"
              >
                <img src="login.jpg"></img>
                로그인/회원가입
              </a>
            </div>
          </div>

          {/* navbar */}
          <div className="header-lowerlayout">
            <nav className="navbar">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="/category"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  카테고리
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/category/1">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="category/2">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="category/3">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className="btn btn-outline-secondary"
                href="/home"
                role="button"
              >
                홈
              </a>
              <a
                className="btn btn-outline-secondary"
                href="/popular"
                role="button"
              >
                인기
              </a>
              <a
                className="btn btn-outline-secondary"
                href="/new"
                role="button"
              >
                신규
              </a>
              <a
                className="btn btn-outline-secondary"
                href="/endedAt"
                role="button"
              >
                마감임박
              </a>
            </nav>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
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
              <div className="imagesection-image">
                <Slider
                  asNavFor={nav2}
                  ref={(slider) => (slider1.current = slider)}
                  {...settingsSliderNav1}
                >
                  {data1 &&
                    data1.map((carousel) => {
                      return (
                        <Link to={`/project/${carousel.id}`} key={carousel.id}>
                          <img src={carousel.image} />
                        </Link>
                      );
                    })}
                </Slider>
              </div>
              <div className="imagesection-contents">
                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (slider2.current = slider)}
                  {...settingsSliderNav2}
                >
                  {data1 &&
                    data1.map((carousel) => {
                      return (
                        <div
                          className="imagesection-contentsbox"
                          key={carousel.id}
                        >
                          <Link to={`/project/${carousel.id}`}>
                            <div className="imagesection-contentsbox-a1">
                              {carousel.head}
                            </div>
                          </Link>
                          <Link to={`/project/${carousel.id}`}>
                            <div className="imagesection-contentsbox-a2">
                              {carousel.contents}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </Slider>
              </div>
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
            {data2 &&
              data2.map((top) => {
                return (
                  <div className="side-contents" key={top.id}>
                    <div id="side-image">
                      <Link to={`/project/${top.id}`}>
                        <img id="side-image" src={top.image}></img>
                      </Link>
                    </div>
                    <div id="side-number">{top.id}</div>
                    <div className="side-box">
                      <div id="side-category">
                        {top.genre}/{top.production}
                      </div>
                      <a href={top.url}>
                        <div id="side-name">{top.title}</div>
                      </a>

                      <div id="side-rate">{top.rate}% 달성</div>
                    </div>
                  </div>
                );
              })}
            ;
          </aside>
        </section>
        <div className="contents">
          <div className="contents-box-top" key={0}>
            <p>
              <h1>인기</h1>
            </p>
            <p>
              <h2>text</h2>
            </p>
          </div>
          {data3 &&
            data3.map((top) => {
              return (
                <div className="contents-box" key={top.id}>
                  <Link to={`/project/${top.id}`}>
                    <img
                      id="contents-image"
                      src={top.image}
                      width={250}
                      height={200}
                    ></img>
                  </Link>

                  <Link to={`/project/${top.id}`}>
                    <div id="side-name">{top.title}</div>
                  </Link>
                  <div>
                    {top.genre}/{top.production}
                  </div>
                  <div>{top.rate}% 달성</div>
                </div>
              );
            })}
        </div>

        <div className="contents">
          <div className="contents-box-top" key={0}>
            <p>
              <h1>급상승</h1>
            </p>
            <p>
              <h2>text</h2>
            </p>
          </div>
          {data4 &&
            data4.map((top) => {
              return (
                <div className="contents-box" key={top.id}>
                  <Link to={`/project/${top.id}`}>
                    <img
                      id="contents-image"
                      src={top.image}
                      width={250}
                      height={200}
                    ></img>
                  </Link>

                  <Link to={`/project/${top.id}`}>
                    <div id="side-name">{top.title}</div>
                  </Link>
                  <div>
                    {top.genre}/{top.production}
                  </div>
                  <div>{top.rate}% 달성</div>
                </div>
              );
            })}
        </div>
        <div id="contents-last" className="contents">
          <div className="contents-box-top" key={0}>
            <p>
              <h1>공개 예정</h1>
            </p>
            <p>
              <h2>text</h2>
            </p>
          </div>
          {data5 &&
            data5.map((top) => {
              return (
                <div className="contents-box" key={top.id}>
                  <Link to={`/project/${top.id}`}>
                    <img
                      id="contents-image"
                      src={top.image}
                      width={250}
                      height={200}
                    ></img>
                  </Link>

                  <Link to={`/project/${top.id}`}>
                    <div id="side-name">{top.title}</div>
                  </Link>
                  <div>
                    {top.genre}/{top.production}
                  </div>
                  <div>{top.rate}% 달성</div>
                </div>
              );
            })}
        </div>
      </main>
      <footer className="footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default MainPage;
