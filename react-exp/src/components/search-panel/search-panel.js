import React, { Component } from 'react'
import './search-panel.css';


class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (event) => {
    const term = event.target.value;
    this.setState({ term })
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find employee"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}


/* const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find employee"
    />
  )
} */

export default SearchPanel


/* const loadData = async () => {
  try{
    const url = `https://api.tvmaze.com/shows/1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  
  }catch{
    console.error()
  }
}

loadData(); */
