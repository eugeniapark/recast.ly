// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import { searchYouTube, throttledSearchYouTube } from './lib/searchYouTube.js';
// import exampleVideos from './data/exampleVideoData.js';

ReactDOM.render(
  <App searchYouTube={throttledSearchYouTube()} />,
  document.getElementById('app')
);


ReactDOM.render({<App videos=exampleVideoData}/> document.getElementById('app'));