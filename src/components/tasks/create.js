import React from 'react';
import { connect } from 'react-redux'
import { showCreateWindow, createTask } from '../../actions/tasks';

function Create(props) {
  console.log(props)

  if(props.creating) {
    const task = {name: 'test', category: 'feeding'};
    return (
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name'/>
        <label htmlFor='category'>Category:</label>
        <input type='text' name='category'/>
      </form>
      <div>
        <p>FILLER TEXT</p>
        <button onClick={() => props.dispatch(createTask(task))}>CREATE</button>
      </div>
    )
  }

  else {
    return (
      <button onClick={() => props.dispatch(showCreateWindow())}>Create Task</button>
    )
  }
}

const mapStateToProps = state => ({
  creating: state.tasks.creating
})

export default connect(mapStateToProps)(Create)