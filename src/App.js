import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//components
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';



class App extends Component {
  constructor(props) {
    super(props);
    //setting state
    this.state = {
      businesses: []
    };
    //binding searchYelp method to the current value of this
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
  //console.log("Searching Yelp with " + term + ", " + location + ", " + sortBy);
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (

      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
