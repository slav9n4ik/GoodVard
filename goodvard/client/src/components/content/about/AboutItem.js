import React, { Component } from "react";

class AboutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      btnValue: "Подробнее"
    };
    this.moreBtnHandler = this.moreBtnHandler.bind(this);
  }

  moreBtnHandler() {
    console.log("More button");
    if (this.state.btnValue === "Подробнее") {
        this.setState({
            text: this.props.text,
            btnValue: "Скрыть"
        })
    } else {
        let text = this.props.text.substring(0, 170);
        text = text + "..."; 
        this.setState({
            text: text,
            btnValue: "Подробнее"
        })
    }
  }

  componentDidMount() {
    let w = window.innerWidth;
    let text = "";
    if (w < 1024) {
      if (this.props.text.length > 170) {
        text = this.props.text.substring(0, 170);
        text = text + "..."; 
      }
    } else {
        text = this.props.text;
    }
    this.setState({
        text: text
    });
  }

  render() {
    return (
      <div className="col-md-5 col-12 about-container-item">
        <img src={this.props.src} className="img-item" alt="" />
        <h3>{this.props.name}</h3>
        <h5>{this.props.expl}</h5>
        <p>{this.state.text}</p>
        <input
          className="d-lg-none note-button btn-margin"
          type="button"
          value={this.state.btnValue}
          onClick={this.moreBtnHandler}
        />
      </div>
    );
  }
}

export default AboutItem;
