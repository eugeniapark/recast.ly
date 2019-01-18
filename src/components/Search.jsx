class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.searchYouTube = this.searchYouTube.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
    this.props.searchYouTube(event.target.value);
  }

  searchYouTube() {
    this.props.searchYouTube(this.state.query);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleQueryChange}
        />
        <button className="btn hidden-sm-down" onClick={this.searchYouTube}>
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;