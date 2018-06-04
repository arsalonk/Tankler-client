import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import DatabaseNav from './database-nav';
import Fish from './tabs/fish';
import Invertebrates from './tabs/invertebrates';
import Corals from './tabs/corals';
import { fetchDatabase } from '../../actions/database';

class Database extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDatabase());
  }

  render() {
    return (
      <div>
        <h2>Database Tab</h2>
        <DatabaseNav />
        <section>
          <Route exact path='/dashboard/database' component={Fish} />
          {/* <Route exact path='/dashboard/database/invertebrates' component={Invertebrates} /> */}
          {/* <Route exact path='/dashboard/database/corals' component={Corals} /> */}
        </section>
      </div>
    )
  }
}

export default connect()(Database);