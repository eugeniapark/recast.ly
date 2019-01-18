import VideoListEntry from './VideoListEntry.js';

var VideoList = props => (
  <div className="video-list">
    {props.videos.map((video, index) => (  //iterate over VideoList data and render (map over array data)
      <VideoListEntry  //imported: VideoListEntry  
        key={index}
        video={video}  //pass down video value as a prop: video={video}
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


/*
React: 
- When need something evaluated put in {}
- When use variable (props), need to define in the parameters


1. App
2. VideoListEntry
3. State changed event
4. Video list entry
*/