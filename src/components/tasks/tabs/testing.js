import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../../actions/tasks';
import Create from '../create';

export function Testing(props) {

  const category = 'testing';
  const filter = props.tasks.filter(task => task.category === 'testing');
  let days;
  const tasks = filter.map((task, index) => {
    if(task.repeat === 1) {
      days = 'day';
    } else {
      days = `${task.repeat} days`;
    }
    return (
      <li key={index} className='list-element'>
        <p>{task.name} every {days}</p>
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

export default connect(mapStateToProps)(Testing)