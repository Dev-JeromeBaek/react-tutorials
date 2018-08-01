import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import {
  optionsBar,
  responsiveBar,
  drawListenerBar,
  // createListenerBar
} from '../variables/BarOptionSet';

class Bar extends Component {
  shouldComponentUpdate() {
    if (this.props.cycleTime) {
      return true;
    }
    return false;
  }
  render() {
    console.log(this.props);
    return (
      <ChartistGraph
        data={this.props.data}
        type="Bar"
        options={optionsBar}
        responsiveOptions={responsiveBar}
        listener={drawListenerBar}
      />
    );
  }
}

export default Bar;
