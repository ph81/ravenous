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
      {
        this.props.businesses.map(business => {
          return <Business business={business} />;
        })
      }
      </div>
    )
  }
}

export default BusinessList;
