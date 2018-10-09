function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
   };
}

class SearchBox extends React.Component {
   constructor(props) {
    super(props);
    this.state = {fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  componentDidMount() {
    this.searchBox = document.querySelector('.search-box');
    this.searchBoxInitialTop = getCoords(this.searchBox).top;
    
  isFixed() {
    return undefined;
  }

  setPosition() {
    return undefined;
  }
}
