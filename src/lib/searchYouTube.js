var searchYouTube = (options, callback) => {
  let maxResults = options.max;
  if (maxResults === undefined) {
    maxResults = 5;
  }
  if (!callback) {
    return $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        maxResults: maxResults,
        q: options.query,
        key: options.key,
        part: 'snippet'
      },
      contentType: 'application/json'
    });
  } else {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        maxResults: maxResults,
        q: options.query,
        key: options.key,
        part: 'snippet'
      },
      contentType: 'application/json',
      success: callback
    });
  }
};

export default searchYouTube;
