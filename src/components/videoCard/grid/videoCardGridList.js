import React from "react";

import { Grid, Image } from "semantic-ui-react";
import VideoCardGrid from "./videoCardGrid";

export default class VideoCardGridList extends React.Component {
  getPlaylist = (name, videos) => {
    return (
      <div key={name}>
        <Header size="medium">{name}</Header>
        <Grid relaxed columns={4}>
          {videos.map(video => (
            <VideoCardGrid
              video={video.id}
              key={video.id}
              playSong={this.props.playSong}
              addToNowPlaying={this.props.addToNowPlaying}
            />
          ))}
        </Grid>
      </div>
    );
  };

  getPlaylists = () => {
    let keys = Object.keys(this.props.playlists);
    return keys.map(key => {
      return this.getPlaylist(key, this.props.playlists[key]);
    });
  };
  render() {
    if (Object.keys(this.props.playlists).length === 0) {
      return <div>Loading...</div>;
    }

    return <div>{this.getPlaylists()}</div>;
  }
}
