import React from 'react';
import {connect} from 'react-redux';

export function Feeding(props) {

  const filter = props.tasks.filter(task => task.category === 'feeding');
  const tasks = filter.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
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

export default connect(mapStateToProps)(Feeding)