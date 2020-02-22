import React from "react";
import unSplash from "../api/unSplash";
import SearchBar from "./searchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async control => {
    const response = await unSplash.get("/search/photos", {
      params: { query: control }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} /> I have:
        {this.state.images.length} images
      </div>
    );
  }
}

export default App;
