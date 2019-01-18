class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleQueryChange(event) {
    this.props.handleQueryChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.query}
          onChange={this.handleQueryChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;



//sdfsdfsdf
/*
var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;



//Turn into a class:
// var Search = () => (
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateQuery(e) {
    let {value} = e.target;
    this.setState({query: value})
  }
  

  //onClick, auto supply condition w properties
  event.target.value
*/