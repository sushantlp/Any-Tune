import React from "react";

import { downloadVideo } from "../../../../utils/downloadFile";

import { Grid, Card, Icon, Image } from "semantic-ui-react";
import classes from "./static/css/videoCardGrid.css";

export default class VideoCardGrid extends React.Component {
  playsong = () => {
    this.props.playSong(this.props.video);
  };

  addToNowPlaying = () => {
    this.props.addToNowPlaying(this.props.video);
  };

  downloadSong = () => {
    downloadVideo(this.props.video);
  };

  mouseOut = event => {};

  mouseOver = () => {};
  render() {
    const MAX_TITLE_LENGTH = 33;
    let videoTitle = this.props.video.title;

    if (videoTitle.length > MAX_TITLE_LENGTH) {
      videoTitle = videoTitle.substring(0, MAX_TITLE_LENGTH) + "... ";
    }

    return (
      // <div>
      <Grid columns={1} divided>
        <Card>
          <div
            onMouseOut={$index => this.mouseOut($index)}
            onMouseOver={$index => this.mouseOver($index)}
          >
            <Image src={this.props.video.thumb} className={classes.ImageCard} />
            <span className={classes.PlayIcon}>
              <Icon name="video play" size="huge" />
            </span>
          </div>
          <Card.Content>
            <Card.Header>
              <span className={classes.Header}>{videoTitle}</span>
              <span className={classes.Icon}>
                <Icon name="ellipsis vertical" size="small" color="grey" />
              </span>
            </Card.Header>
            <Card.Meta>
              <span>{this.props.video.uploader}</span>
              <br />
              <span>{this.props.video.views}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid>
      // </div>
    );
  }
}
