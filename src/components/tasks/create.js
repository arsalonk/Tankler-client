import React from 'react';
import { connect } from 'react-redux'
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../auth/input';
import moment from 'moment';
import {required, nonEmpty} from '../../validators';
import { showCreateWindow, createTask, hideCreateWindow } from '../../actions/tasks';

class Create extends React.Component {

  onSubmit(values) {
    const today = moment().format('LL')
    const display = moment().add(values.repeat, 'day').format('LL')
    this.props.dispatch(createTask(values.name, this.props.category, today, display, values.repeat))
  }

  render() {
    if (this.props.creating) {
      return (
        <form className='task-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field
            name='name'
            type='text'
            component={Input}
            label='Name:'
            validate={[required, nonEmpty]}
          />
          <Field
            name='repeat'
            type='number'
            component={Input}
            label='Every how many days?'
            validate={[required, nonEmpty]}
          />
          <button
            className='create-btn'
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            create
          </button>
          <button className='cancel-btn' onClick={() => this.props.dispatch(hideCreateWindow())}>cancel</button>
        </form>
      )
    }

    else {
      return (
        <button className='create-btn' onClick={() => this.props.dispatch(showCreateWindow())}>Create Task</button>
      )
    }
  }
}

const mapStateToProps = state => ({
  creating: state.tasks.creating
})

export default reduxForm({
  form: 'create',
  onSubmitFail: (errors, dispatch) => dispatch(focus('create', 'name'))
})(connect(mapStateToProps)(Create));