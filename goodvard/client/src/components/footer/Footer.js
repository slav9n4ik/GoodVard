import React, { Component, Fragment } from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        return(
            <Fragment>
                <div id="footer" className="col-12">
                    <h5>© GoodVard 2018. Все права защищены.</h5>
                    <p>@TresnevMediaGroup</p>
                </div>
            </Fragment>
        );
    }
}

export default Footer;