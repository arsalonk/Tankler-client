import React from 'react';
import {connect} from 'react-redux';
import { deleteTask } from '../../actions/tasks';

export function Supplements(props) {

  const filter = props.tasks.filter(task => task.category === 'supplements');
  const tasks = filter.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
        <button onClick={() => props.dispatch(deleteTask(task.id))}>delete</button>
      </li>
    );
  });

  if(!props.creating) {
    return (
      <ul>
        {tasks}
      </ul>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  creating: state.tasks.creating
});

export default connect(mapStateToProps)(Supplements)