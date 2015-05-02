var ShowdownAPI = {
  fetchData: function(tracker) {
    return $.get("https://apibeta.nudgeyourself.com/showdown", function(data) {
      return data;
    });
  }
}
