import React from "react";

class SearchBar extends React.Component {
  state = { control: " " };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.control);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.control}
              onChange={e => this.setState({ control: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
