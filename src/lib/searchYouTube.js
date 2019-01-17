var searchYouTube = async (options, callback) => {
  let maxResults = options.max;
  if (maxResults === undefined) {
    maxResults = 5;
  }
  if (!callback) {
    return (await $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search', //at this URL
      type: 'GET', //GET
      data: {
        maxResults: maxResults, //how many results
        q: options.query, //topic
        key: options.key, //our key
        part: 'snippet', //info
        type: 'video', //only videos
        videoEmbeddable: true //embedded only
      },
      contentType: 'application/json'
    })).items;
  } else {
    let newCallback = data => callback(data.items);
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        maxResults: maxResults,
        q: options.query,
        key: options.key,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      },
      contentType: 'application/json',
      success: newCallback
    });
  }
};

export default searchYouTube;
