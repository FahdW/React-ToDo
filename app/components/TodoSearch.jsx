import React from 'react';

export default class TodoSearch extends React.Component {

  handleSearch = () => {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChanage={this.handleSearch} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }

}
