import React from 'react';
import { connect } from 'react-redux'
import { fetchTank, showUpdateTankWindow } from '../../actions/tank';
import CreateTank from './create-tank';
import UpdateTank from './update-tank';
import TankNav from './tank-nav'
import { fetchLivestock } from '../../actions/livestock';
import Corals from './tabs/corals';

class Tank extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTank());
    this.props.dispatch(fetchLivestock());
  }

  render() {

    const tank = this.props.tank.map((tank, index) => {
      if (!this.props.updatingTank) {
        return (
          <li key={index}>
            <h3>My Tank</h3>
            <p>Length: {tank.length}" Width: {tank.width}" Height: {tank.height}"</p>
            {/* <p>Width: {tank.width}"</p>
            <p>Height: {tank.height}"</p> */}
            <p>Volume: {tank.volume}cm^3</p>
            <button onClick={() => this.props.dispatch(showUpdateTankWindow())}>Update</button>
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

    if (tank.length > 0) {
      return (
        <div>
          <ul>
            {tank}
          </ul>
          <section>
            <TankNav />
            {/* <Route exact path='/dashboard/tank/fish' component={Fish} /> */}
            {/* <Route exact path='/dashboard/tank/invertebrates' component={Invertebrates} /> */}
            <Route exact path='/dashboard/tank/corals' component={Corals} />
          </section>
        </div>
      );
    } else {
      return (
        <div>
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

export default connect(mapStateToProps)(Tank)