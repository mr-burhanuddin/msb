import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./Navbar";
import About from "./NavComp/About";
import Facilities from "./NavComp/Facilities";
import News from "./NavComp/News";
import Contact from "./NavComp/Contact";
import Transport from "./NavComp/Transport";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/facilities">
            <Facilities />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/transport">
            <Transport />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
