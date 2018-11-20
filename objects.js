var playlist = {
  Elvis: "Are you lonesome"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}