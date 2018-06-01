import React from 'react';
import { connect } from 'react-redux'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from '../auth/input';
import {required, nonEmpty} from '../../validators';
import { showCreateWindow, createTask, hideCreateWindow } from '../../actions/tasks';

class Create extends React.Component {

  onSubmit(values) {
    this.props.dispatch(createTask(values.name, values.category))
  }

  render() {
    if (this.props.creating) {
      return (
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field
            name='name'
            type='text'
            component={Input}
            label='Name:'
            validate={[required, nonEmpty]}
          />
          <Field
            name='category'
            type='text'
            component={Input}
            label='Category:'
            validate={[required, nonEmpty]}
          />
          <button
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            create
          </button>
          <button onClick={() => this.props.dispatch(hideCreateWindow())}>cancel</button>
        </form>
      )
    }

    else {
      return (
        <button onClick={() => this.props.dispatch(showCreateWindow())}>Create Task</button>
      )
    }
  }
}

const mapStateToProps = state => ({
  creating: state.tasks.creating
})

// connect(mapStateToProps)(Create);

export default reduxForm({
  form: 'create',
  onSubmitFail: (errors, dispatch) => dispatch(focus('create', 'name'))
})(connect(mapStateToProps)(Create));