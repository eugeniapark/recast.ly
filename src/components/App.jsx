import VideoList from './VideoList.js';  //don't need .jsx bc transpiler won't recognize (using ES5 not ES6) -- in package.json we made it only able to transpile in ES5 (babel) 
import VideoPlayer from './VideoPlayer.js';  //all these files are getting compiled
import Search from './Search.js'; //"./" = look in the same directory, "../" = parent dir
import ExampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
//doesn't need to import VideoListEntry

class App extends React.Component {
  constructor(props) {
    super(props);
    let emptyVideo = {
      snippet: {
        title: ''
        thumbnails: {
          default: {
            url: ''
          }
        }
        description: ''
      }
    };
    this.state = {  //initialize state app: pass props down to children's component in <divs>
      allVideos: [emptyVideo],
      currentVideo: emptyVideo  //this.props.videos[0] - bad practice but for this sprint
    };
  }
  getVideoSelector(context) {
    return video => {
      context.setState({
        currentVideo: video
      });
    };
  }
  //click on title of videoListEntry
  //change currentVideo from videoPlayer to that video

  /*
  function
    changes currentVideo based on video provided
  */

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

  componentDidMount() {  //changeVideo??
    let options = {
      key: YOUTUBE_API_KEY,
      query: 'south korea',
      max: 5
    };
    this.props.searchYouTube(options, videos => {
      this.setState({ allVideos: videos, currentVideo: videos[0] });  //this.setState({ currentVideo });
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;




  
//VideoPlayer 
//VideoList
//VideoListEntry
//exampleVideoData
//...

//index
//App
//