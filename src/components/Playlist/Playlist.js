import React from 'react';
import './Playlist.css';

import Track from '../Track/Track'


class  Playlist extends React.Component {
  render () {
    return (
      <div className="Playlist">
        <input value={this.props.name} onChange={this.props.onChange} />
        <div className="TrackList">
          {this.props.playlist.map((item, index) => {
            return (
              <Track
                key={index}
                context="Playlist"
                item={item}
                onClick={this.props.onClick}
              />
            )
          })}
        </div>
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
