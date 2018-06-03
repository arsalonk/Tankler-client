import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from '../auth/input';
import { required, nonEmpty } from '../../validators';
import { updateTank, hideUpdateTankWindow } from '../../actions/tank';

class UpdateTank extends React.Component {

  onSubmit(values) {
    const volume = values.length * values.width * values.height;
    this.props.dispatch(updateTank(values.length, values.width, values.height, volume, this.props.id))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name='length'
          type='number'
          component={Input}
          label='Length:'
          validate={[required, nonEmpty]}
        />
        <Field
          name='width'
          type='number'
          component={Input}
          label='Width:'
          validate={[required, nonEmpty]}
        />
        <Field
          name='height'
          type='number'
          component={Input}
          label='Height:'
          validate={[required, nonEmpty]}
        />
        <button
          type='submit'
          disabled={this.props.pristine || this.props.submitting}>
          update
        </button>
        <button onClick={() => this.props.dispatch(hideUpdateTankWindow())}>cancel</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  updatingTank: state.tank.updatingTank
})

export default reduxForm({
  form: 'create',
  onSubmitFail: (errors, dispatch) => dispatch(focus('create', 'stats'))
})(connect(mapStateToProps)(UpdateTank));