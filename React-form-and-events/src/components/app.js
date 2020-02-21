import React from "react";
import SearchBar from "./searchBar";

class App extends React.Component {
  onSearchSubmit(control) {
    console.log(control);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
