import React from 'react';
import {Route} from 'react-router-dom';
import TasksNav from './tasks-nav';
import Feeding from './tabs/feeding';
import Supplements from './tabs/supplements';
import Testing from './tabs/testing';
import Maintenance from './tabs/maintenance';
import {connect} from 'react-redux';
import { fetchTasks } from '../../actions/tasks';
import './tasks.css';

class Tasks extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  render () {
    return (
      <div className='container'>
        <h2>Tasks</h2>
        <TasksNav />
        <section className='tasks'>
          <Route exact path='/dashboard/tasks' component={Feeding}/>
          <Route exact path='/dashboard/tasks/supplements' component={Supplements} />
          <Route exact path='/dashboard/tasks/testing' component={Testing} />
          <Route exact path='/dashboard/tasks/maintenance' component={Maintenance} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creating: state.tasks.creating
})

export default connect(mapStateToProps)(Tasks);