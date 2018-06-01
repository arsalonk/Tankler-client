import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import { fetchParameters } from '../../actions/parameters';

import ParametersNav from './parameters-nav'
import Alkalinity from './alkalinity';
import Ammonia from './ammonia';
import Calcium from './calcium';
import Nitrate from './nitrate';
import PH from './pH';
import Phosphate from './phosphate';
import Salinity from './salinity';
import Temperature from './temperature';

class Parameters extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchParameters())
  }

  render () {
    return (
      <div>
        <h2>Parameters</h2>
        <ParametersNav />
        <Route exact path='/dashboardparameters/alkalinity' component={Alkalinity}/>
        <Route exact path='/dashboard/parameters/ammonia' component={Ammonia} />
        <Route exact path='/dashboard/parameters/calcium' component={Calcium} />
        <Route exact path='/dashboard/parameters/nitrate' component={Nitrate} />
        <Route exact path='/dashboard/parameters/pH' component={PH}/>
        <Route exact path='/dashboard/parameters/phosphate' component={Phosphate} />
        <Route exact path='/dashboard/parameters/salinity' component={Salinity} />
        <Route exact path='/dashboard/parameters/temperature' component={Temperature} />
      </div>
    );
  }
}

export default connect()(Parameters);