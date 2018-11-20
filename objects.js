var playlist = {
  Elvis: "Are you lonesome"
};

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, { [key]: value})
}