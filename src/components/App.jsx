import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import ExampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    let emptyVideo = {
      id: {
        videoId: ''
      },
      snippet: {
        title: '',
        thumbnails: {
          default: {
            url: ''
          }
        },
        description: ''
      }
    };
    this.state = {
      //initialize state app: pass props down to children's component in <divs>
      allVideos: [emptyVideo],
      currentVideo: emptyVideo,
      query: ''
    };
  }
  videoSelector(video) {
    this.setState({
      currentVideo: video
    });
  }

  searchYouTube(newQuery) {
    let options = {
      key: YOUTUBE_API_KEY,
      query: newQuery,
      max: 5
    };
    console.log(options);
    this.props.searchYouTube(options, videos => {
      this.setState({ allVideos: videos, currentVideo: videos[0] });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              query={this.state.query}
              searchYouTube={this.searchYouTube.bind(this)}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.allVideos}
              videoSelector={this.videoSelector.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;