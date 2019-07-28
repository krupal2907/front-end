import React from "react";
//Import router components
import { BrowserRouter, Route } from "react-router-dom";
//Import main components
import NavSignedOut from "./components/navbar/NavSignedOut";
import Home from "./components/homepage/Home";
import SignInForm from "./components/forms/SignInForm";
import LogInForm from "./components/forms/LogInForm";
import Footer from "./components/footer/Footer";

class App extends React.Component {

  render() {

    return (

      //Main Router
      <BrowserRouter>
        {/*  App  */}
        <div className="App">
          {/*  Navbar  */}
          <NavSignedOut />
          {/*  Routes  */}
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/login" component={LogInForm} />
          <Footer />
        </div>
      </BrowserRouter>

    );

  }

}

export default App;
