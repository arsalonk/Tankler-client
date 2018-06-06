import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from '../auth/input';
import moment from 'moment'
import { required, nonEmpty } from '../../validators';
import { createParameter, showCreateWindowP, hideCreateWindowP } from '../../actions/parameters';

class Create extends React.Component {

  onSubmit(values) {
    const date = moment().format('LLL')
    this.props.dispatch(createParameter(values.stats, this.props.category, date))
    this.props.dispatch(hideCreateWindowP());
  }

  render() {
    if (this.props.creating) {
      return (
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field
            name='stats'
            type='text'
            component={Input}
            label='Stats:'
            validate={[required, nonEmpty]}
          />
          {/* <Field
            name='category'
            type='text'
            component={Input}
            label='Category:'
            validate={[required, nonEmpty]}
          /> */}
          <button
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            create
          </button>
          <button onClick={() => this.props.dispatch(hideCreateWindowP())}>cancel</button>
        </form>
      )
    }

    else {
      return (
        <div className='list-element'>
          <p>No statistics exists for this parameter yet</p>
          <button className='form-button' onClick={() => this.props.dispatch(showCreateWindowP())}>Create</button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  creating: state.parameters.creatingP
})

export default reduxForm({
  form: 'create',
  onSubmitFail: (errors, dispatch) => dispatch(focus('create', 'stats'))
})(connect(mapStateToProps)(Create));