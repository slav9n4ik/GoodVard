import React, { Component, Fragment } from "react";
import coursArray from "./CoursesArray.js";
import CourseItem from "./CourseItem.js";
import CourseExplContainer from "./CourseExplContainer.js"
import "./courses.css";

class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeId: 0
    }
    this.clickOnContainerHandler = this.clickOnContainerHandler.bind(this);
  }

  clickOnContainerHandler(id) {
    this.setState({
      activeId: id
    })
  }

  render() {
    let courseItems = coursArray.map(item => {
      return (
        <CourseItem key={item.id} 
                    item={item} 
                    clickOnContainerHandler={this.clickOnContainerHandler}
                    isActive={item.id === this.state.activeId}
        />
      );
    });
    return (
      <Fragment>
        <div id="courses" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Программы обучения</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="container-fluid course-container d-none d-md-block mb-4">
                <div className="row justify-content-center mb-3">
                  {courseItems}
                </div>
                <CourseExplContainer 
                  itemId={this.state.activeId}
                />
              </div>
              {/* For mobiles */}
              <div className="container-fluid course-container mb-4 d-md-none">
                <div className="row justify-content-center">
                  {courseItems}
                </div>
              </div>
              <div className="container-fluid mb-4 d-md-none">
                <CourseExplContainer 
                  itemId={this.state.activeId}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Courses;
