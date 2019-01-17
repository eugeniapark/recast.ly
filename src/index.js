// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import { searchYouTube, throttledSearchYouTube } from './lib/searchYouTube.js';

ReactDOM.render(
  <App searchYouTube={throttledSearchYouTube()} />,
  document.getElementById('app')
);
