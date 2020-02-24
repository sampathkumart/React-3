import React from "react";
import unSplash from "../api/unSplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

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
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h2>
          <ImageList images={this.state.images} />
        </h2>
      </div>
    );
  }
}

export default App;
