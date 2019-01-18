var searchYouTube = async (options, callback) => {
  let maxResults = options.max;
  if (maxResults === undefined) {
    maxResults = 5;
  }

  let newCallback = data => callback(data.items);  //*to pass test l:19
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: maxResults,
      q: options.query,  //query
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: newCallback  //success:callback *but won't pass tests
  });
};

export default searchYouTube;
