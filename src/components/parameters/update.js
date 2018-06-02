import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from '../auth/input';
import moment from 'moment'
import { required, nonEmpty } from '../../validators';
import { createParameter, hideUpdateWindow, showUpdateWindow, updateParameter } from '../../actions/parameters';

class Update extends React.Component {

  onSubmit(values) {
    const date = moment().format('LLL')
    this.props.dispatch(updateParameter(values.stats, values.category, date, this.props.id));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name='stats'
          type='text'
          component={Input}
          label='Stats:'
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
          Update
        </button>
        <button onClick={() => this.props.dispatch(hideUpdateWindow())}>Cancel</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  updating: state.parameters.updating
});

export default reduxForm({
  form: 'update',
  onSubmitFail: (errors, dispatch) => dispatch(focus('update', 'stats'))
})(connect(mapStateToProps)(Update));