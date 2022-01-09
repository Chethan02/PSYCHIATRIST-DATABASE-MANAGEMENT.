import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Title from './components/Title/Title';
import Division from './components/Division/Division';
import Footer from './components/Footer/Footer';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route });
  }

  render() {
    return(
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ?  <div>
             <Title/>
             <Division/>
             <Footer/>
            </div>
          : (
              this.state.route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            )

        }
      </div>
    );
  }
}

export default App;