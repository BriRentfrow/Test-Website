import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebase,app, ui} from './firebase';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";

const auth = app.auth();

ui.start('#firebaseui-auth-container', {
  signInFlow: 'redirect',
  signInSuccessUrl: '/#3',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        // Your requested scopes.
        'https://www.googleapis.com/auth/plus.login'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        hd: 'sjsu.edu'
      }
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(authResult, redirectUrl);
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      console.log("ui loaded");
      document.getElementById('loader').style.display = 'none';
    }
  },

  // Terms of service url.
  tosUrl: 'https://trusting-visvesvaraya-804dfa.netlify.com/#2',
  // Privacy policy url.
  privacyPolicyUrl: 'https://trusting-visvesvaraya-804dfa.netlify.com/#4'

});



var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'first.last@sjsu.edu'
});

auth.getRedirectResult().then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log(result, token, user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(errorCode, errorMessage, email, credential, error);
});

function login(){
  auth.signInWithRedirect(provider).catch(e => {
    console.log(e);
    alert("Your connection sucks.");
  });

}

class WowStateful extends Component {
  state = {
    name: this.props.name
  }
  updateName = () => {
    this.setState({
      name: "Yooooo"
    });
  }
  render() {
    return (
      <h1 onClick={() => this.updateName()}>Wow, this is {this.state.name}</h1>
    )
  }
}

let Wow = (props) => {
  return (
      <h1>Wow, this is {props.name}</h1>
    )
}

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      
      <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>

        <header className="App-header">Welcome to My Website<br></br>
          <div id="links">
            <NavLink className="App-link" to="/">Home</NavLink>
            <NavLink className="App-link" to="/about">About</NavLink>
            <NavLink className="App-link" to="/faq">FAQ</NavLink>
            <NavLink className="App-link" to="/contact">Contact Us</NavLink>
            </div>
        </header>
        
        <div className="App-div">
            <div id="content">
            <br></br>
          
          <Route exact path="/" component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/faq" component = {Faq}/>
          <Route path="/contact" component = {Contact}/>


            </div>
        </div>

        <footer className="App-footer">

          <p>This is the footer text.</p>

        </footer>

      </div>
      </HashRouter>
    );
  }
}

export default App;