import React from 'react'
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          results={this.props.results}
          context="SearchResults"
          onClick={this.props.onClick}
        />
      </div>
    );
   }
}

export default SearchResults
