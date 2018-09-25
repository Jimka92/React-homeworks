'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Activefilter': 'all'
    }
  }
  
sort(projects, category) {
  if (category.toLowerCase() === 'all')
    return projects;
  
  return projects.filter(function (el) {
    return el.category === category;
    })
  }
  
  
  
  <div>
    <Toolbar
      filters={props.filters}
      selected={'All'}
      onSelectFilter={(filter) => console.log(filter)} />
    <Portfolio projects={props.projects} />
  </div>
);
