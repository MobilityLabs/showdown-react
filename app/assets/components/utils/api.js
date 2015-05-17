var ShowdownAPI = {
  fetchData: function(tracker) {
    return $.get("http://localhost:3000/fauxapi", function(data) {
    // return $.get("https://apibeta.nudgeyourself.com/showdown", function(data) {
      return data;
    });
  }
}
