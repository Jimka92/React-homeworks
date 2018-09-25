'use strict'

const App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Activefilter': 'all'
    }
  }
  
  
  <div>
    <Toolbar
      filters={props.filters}
      selected={'All'}
      onSelectFilter={(filter) => console.log(filter)} />
    <Portfolio projects={props.projects} />
  </div>
);
