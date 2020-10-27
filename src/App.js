import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import SearchBar from './components/Searchbar';

class App extends Component {
  state = {
    filterResults: '',
  };

  onHandleChange = (event) => {
    this.setState({
      filterResults: event.target.value,
    });
  };
  render() {
    console.log(this.state.filterResults);
    return (
      <div className="App">
        <SearchBar updateSearchResults={this.onHandleChange} />
        <FilterableProductTable
          products={data}
          searchResult={this.state.filterResults}
        />
      </div>
    );
  }
}

export default App;
