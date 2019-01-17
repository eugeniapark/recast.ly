class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
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
          onChange={this.handleQueryChange.bind(this)}
        />
        <button
          className="btn hidden-sm-down"
          onClick={this.searchYouTube.bind(this)}
        >
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
