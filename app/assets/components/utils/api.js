var ShowdownAPI = {
  fetchData: function(tracker) {
    return $.get("https://api.nudgeyourself.com/showdown", function(data) {
      return data;
    });
  }
}
