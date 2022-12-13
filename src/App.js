import React, { PureComponent } from 'react';
import './App.css';
import data from './data';
import ShareProfitChart from './ShareProfitChart';

class App extends PureComponent {
  constructor() {
    super();
    this.state = { renderedData: data };
  }

  componentDidMount() {
    this.setState({ renderedData: data });
  }

  render() {
    return (
      <div className='App container mx-auto pt-2'>
        <ShareProfitChart
          data={this.state.renderedData}
          chartTitle={'資産推移'}
        />
      </div>
    );
  }
}

export default App;
