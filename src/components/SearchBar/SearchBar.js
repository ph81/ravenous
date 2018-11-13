import React from 'react';
//import ReactDOM from 'react-dom';
//importing styling for component
import './SearchBar.css';

//interacting with Yelp API
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    //returns the current CSS class of the sort options
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    else {
      return '';
    }
  }



  handleSortByChange(sortByOption) {
    //sets the state of a sorting option
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(e){
  this.setState({term: e.target.value});
  }

  handleLocationChange(e){
  this.setState({location: e.target.value});
  }

  handleSearch(e) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    e.preventDefault();
  }




  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      //style each sort by option
      return <li className={this.getSortByClass(sortByOptionValue)}
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                 key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="#top" onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>
    );
  }

}

export default SearchBar;
