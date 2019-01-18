//VIDEO TITLES

var VideoListEntry = props => {
  let videoSelector = props.videoSelector;
  if (videoSelector === undefined) {
    videoSelector = () => 'potato';
  }
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img
          className="media-object"
          src={props.video.snippet.thumbnails.default.url}  //or `https://i.ytimg.com/vi/{props.video.id.videoId}/default.jpg` to get URL
          alt=""
        />
      </div>
      <div className="media-body">
        <div
          className="video-list-entry-title"
          onClick={videoSelector.bind(null, props.video)}  //*.bind() / *onClick()
        >
          {props.video.snippet.title}  {/*when someone ^clicks tag, invoked function thing in here onClick{props.changeVideo(props.video)}*/}
        </div>
        <div className="video-list-entry-detail">
          {props.video.snippet.description}
        </div>
      </div>
    </div>
  );
};

//l20: get title

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
