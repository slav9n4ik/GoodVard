import React from "react";
import HeaderContainer from "./components/header/HeaderContainer.js";
import Main from "./Main.js";


function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <HeaderContainer />
        </div>
        <div className="row">
          <Main />
        </div>
      </div>
  );
}

export default App;
