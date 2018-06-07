import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchTasks, updateTask } from '../actions/tasks';
import './home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    const today = moment().format('LL')
    const filter = this.props.tasks.filter(task => task.displayOn === today);
    const tasks = filter.map((task, index) => {
      const display = moment().add(task.repeat, 'day').format('LL')
      return (
        <li key={index} className='list-element'>
          <p>{task.name}</p>
          <button className='update-btn' onClick={() => this.props.dispatch(updateTask(task.name, task.category, today, display, task.repeat, task.id))}>complete</button>
        </li>
      );
    })
    if (tasks.length > 0) {
      return (
        <div className='home-container'>
          <h2>Tasks due today</h2>
          <ul className='tasks-list'>
            {tasks}
          </ul>
        </div>
      )
    } else {
      return (
        <div className='home-container'>
          <h2>Tasks due today</h2>
          <p>No tasks due at this moment</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps)(Home)