import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
constructor(props) {
  super();
  this.state = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: [],
  };
}

  addTrack(track) {
    if (track.id === this.state.playlistTracks) {
      return track.id;
      this.setState({})
    }
  }

  render() {
 return ( //Possible Error
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
  <div className="App-playlist">
    <SearchResults searchResults={this.state.searchResults}/>
    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    )
  }
}
export default App;
