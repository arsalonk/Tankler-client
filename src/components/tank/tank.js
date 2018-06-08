import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchTank, showUpdateTankWindow } from '../../actions/tank';
import CreateTank from './create-tank';
import UpdateTank from './update-tank';
import TankNav from './tank-nav';
import { fetchLivestock } from '../../actions/livestock';
import Corals from './tabs/corals';
import Fish from './tabs/fish';
import './tank.css';
import Invertebrates from './tabs/invertebrates';

class Tank extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTank());
    this.props.dispatch(fetchLivestock());
  }

  render() {

    const tank = this.props.tank.map((tank, index) => {
      const gallons = tank.volume * 0.0043290;
      const rounded = parseFloat(Math.round(gallons * 100) / 100).toFixed(2);
      if (!this.props.updatingTank) {
        return (
          <li key={index} className='tank-specs'>
            <h2>Tank specs</h2>
            <p>Length: {tank.length}"  Width: {tank.width}"  Height: {tank.height}"</p>
            <p className='volume'>Volume: {tank.volume}in^3</p>
            <p className='volume'>{rounded} gallons</p>
            <button className='update-btn' onClick={() => this.props.dispatch(showUpdateTankWindow())}>Update</button>
          </li>
        );
      } else {
        return (
          <div key={index}>
            <UpdateTank id={tank.id} />
          </div>
        );
      }
    });

    if (tank.length > 0 && !this.props.updatingTank) {
      return (
        <div className='container'>
          <h2>Tank Livestock</h2>
          <section className='list'>
            <TankNav />
            <Route exact path='/dashboard/tank' component={Fish} />
            <Route exact path='/dashboard/tank/invertebrates' component={Invertebrates} />
            <Route exact path='/dashboard/tank/corals' component={Corals} />
          </section>
          <ul>
            {tank}
          </ul>
        </div>
      );
    } else if (tank.length > 0 && this.props.updatingTank) {
      return (
        <div>
          {tank}
        </div>
      );
    } else {
      return (
        <div className='container'>
          <p>No tank exists</p>
          <CreateTank />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  tank: state.tank.tank,
  updatingTank: state.tank.updatingTank
});

export default connect(mapStateToProps)(Tank);