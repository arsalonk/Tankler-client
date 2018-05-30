import React from 'react';
import {connect} from 'react-redux';

export function Supplements(props) {

  const filter = props.tasks.filter(task => task.category === 'supplements');
  const tasks = filter.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
        <button></button>
      </li>
    );
  });

  return (
    <ul>
      {tasks}
    </ul>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
});

export default connect(mapStateToProps)(Supplements)