import getQueryString from "./paramParser";

export const host = "http://localhost:8080/";

export default {
  getDownloadLink: getUrl => {
    return new Promise((resolve, reject) => {
      fetch(host + getUrl).then(response =>
        response.json().then(data => resolve(data))
      );
    });
  },
  getPlaylists: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "/api/v1/playlists").then(response =>
        response.json().then(data => resolve(data.results))
      );
    });
  },
  getPlaylistSongs: (playlists, count) => {
    let commaSeparatedPlaylists = playlists.map(a => a.playlist).join();
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/trending?" +
          getQueryString({ type: commaSeparatedPlaylists, number: count })
      ).then(response => response.json().then(data => resolve(data.results)));
    });
  }
};
