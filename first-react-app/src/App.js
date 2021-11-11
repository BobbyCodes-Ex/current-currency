import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Exchange from './Exchange';
import Chart from './Chart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Exchange/>
            </Route>
            <Route path="/chart">
              <Chart/>
            </Route>
          </Switch>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
