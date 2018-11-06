import React from 'react';
//import ReactDOM from 'react-dom';
//importing styling for component
import './BusinessList.css';
//importing component
import Business from '../Business/Business';


class BusinessList extends React.Component {
  render() {
    return (
      //Listing restaurants
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;
