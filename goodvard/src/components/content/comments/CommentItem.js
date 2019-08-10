import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

class CommentItem extends Component {

    constructor(props) {
        super(props);
        this.state ={
            isHide: true,
            buttonValue: "Подробнее"
        }
        this.moreBtnHandler = this.moreBtnHandler.bind(this);
    }
    moreBtnHandler(){
        if (this.state.buttonValue === "Подробнее") {
            this.setState({
                isHide: !this.state.isHide,
                buttonValue: "Скрыть"
            })
        } else {
            this.setState({
                isHide: !this.state.isHide,
                buttonValue: "Подробнее"
            })
        }
    }

    render() {
        return(
            <Fragment>
                <div className="col-xl-3 col-md-6 comments-container-item">
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.expl}</h4>
                    <img src={this.props.src} alt=""/>
                    <p>{this.props.text}</p>
                    <p hidden={this.state.isHide}>{this.props.textMore}</p>
                    <input
                        className="note-button"
                        type="button"
                        value={this.state.buttonValue}
                        onClick={this.moreBtnHandler}
                    />
                </div>
            </Fragment>
        );
    }
}

export default CommentItem;