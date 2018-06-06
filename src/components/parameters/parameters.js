import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import { fetchParameters } from '../../actions/parameters';

import ParametersNav from './parameters-nav'
import Alkalinity from './tabs/alkalinity';
import Ammonia from './tabs/ammonia';
import Calcium from './tabs/calcium';
import Nitrate from './tabs/nitrate';
import PH from './tabs/pH';
import Phosphate from './tabs/phosphate';
import Salinity from './tabs/salinity';
import Temperature from './tabs/temperature';

class Parameters extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchParameters())
  }

  render () {
    return (
      <div className='container'>
        <h2>Parameters</h2>
        <ParametersNav />
        <Route exact path='/dashboard/parameters' component={Alkalinity}/>
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