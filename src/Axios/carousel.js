import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  state = {
    activeSlide: 0,
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
    };
    return (
      <div className="testbox">
        <div className="carousel-test">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <img src="carousel1.jpg" alt="..." />
            </div>
            <div key={2}>
              <img src="carousel2.jpg" alt="..." />
            </div>
            <div key={3}>
              <img src="carousel3.jpg" alt="..." />
            </div>
          </Slider>
        </div>
        <div className="testbox2">
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={this.previous}>
              Previous
            </button>
            <button className="button" onClick={this.next}>
              Next
            </button>
          </div>
          <p>
            activeSlide:
            <strong>{this.state.activeSlide}</strong>
            {this.state.activeSlide === 0 && <p>if slide = 0 ? visible</p>}
            {this.state.activeSlide === 2 && <p>if slide = 2 ? visible</p>}
          </p>
        </div>
      </div>
    );
  }
}
