import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'; //"./" = look in the same directory, "../" = parent dir
import ExampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initialize state app: pass props down to children's component in <divs>
      allVideos: ExampleVideoData,
      currentVideo: ExampleVideoData[0]
    };
  }
  getVideoSelector(context) {
    return video => {
      context.setState({
        currentVideo: video
      });
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.allVideos}
              videoSelector={this.getVideoSelector(this)}
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
