import React from 'react';
//import ReactDOM from 'react-dom';
//importing styling for component
import './BusinessList.css';
//importing component
import Business from '../Business/Business';


class BusinessList extends React.Component{
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;
