import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../../actions/tasks';
import Create from '../create';

export function Supplements(props) {

  const category = 'supplements';
  const filter = props.tasks.filter(task => task.category === 'supplements');
  const tasks = filter.map((task, index) => {
    return (
      <li key={index} className='list-element'>
        <p>{task.name}</p>
        <button className='task-btn' onClick={() => props.dispatch(deleteTask(task.id))}>delete</button>
      </li>
    );
  });

  if (!props.creating) {
    return (
      <div>
        <ul className='tasks-list'>
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

export default connect(mapStateToProps)(Supplements)