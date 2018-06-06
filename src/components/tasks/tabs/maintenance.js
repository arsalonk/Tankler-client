import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../../actions/tasks';
import Create from '../create';

export function Maintenance(props) {

  const category = 'maintenance';
  const filter = props.tasks.filter(task => task.category === 'maintenance');
  const tasks = filter.map((task, index) => {
    return (
      <li key={index}>
        {task.name}
        <button onClick={() => props.dispatch(deleteTask(task.id))}>delete</button>
      </li>
    );
  });

  if (!props.creating) {
    return (
      <div>
        <ul>
          {tasks}
        </ul>
        <Create category={category} />
      </div>
    );
  } else {
    return (
      <Create category={category} />
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  creating: state.tasks.creating
});

export default connect(mapStateToProps)(Maintenance)