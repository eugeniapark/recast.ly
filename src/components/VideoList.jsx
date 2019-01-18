import VideoListEntry from './VideoListEntry.js';  
import App from './App.jsx';

var VideoList = props => (
    //iterate over VideoList data and render
    //imported: VideoListEntry  //pass down video value as a prop: video={video}
<div className="video-list">
    {props.videos.map((video, index) => (
      <VideoListEntry
        key={index}
        video={video}
        videoSelector={props.videoSelector}
      />
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList; //exports to Global


//React: when need something evaluated put in {}
//when use variable (props), need to define in the parameters


//App
// VideoListenEntry
// StateChangedEvent

// Video list entry