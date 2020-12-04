import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route,Link} from 'react-router-dom';
import home from './Router/home';
import dashboard from './Router/dashboard';
import aboutUs from './Router/aboutUs';
import contactUs from './Router/contactUs';
import counter from './Counter/counter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCart: 0
    }
    localStorage.setItem("TotalCartValue", 0)
  }

  calculateSum = () => {
    try {
      localStorage.getItem("TotalCartValue");
      return 0;
    }
    catch (ex) {
      console.log(ex);
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        totalCart:10
            });
    },2000);
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    return (
      <React.Fragment>
        <div class="App">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Aboutus">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
        <Route exact path="/" component={counter} />
        <Route path= "/Home" component={home} />
        <Route path= "/Dashboard" component={dashboard} />
        <Route path= "/Aboutus" component={aboutUs} />
        <Route path= "/ContactUs" component={contactUs} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
