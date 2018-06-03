import React from 'react';
import { connect } from 'react-redux'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from '../auth/input';
import {required, nonEmpty} from '../../validators';
import { hideCreateTankWindow, showCreateTankWindow, createTank } from '../../actions/tank';

class CreateTank extends React.Component {

  onSubmit(values) {
    const volume = values.length * values.width * values.height;
    this.props.dispatch(createTank(values.length, values.width, values.height, volume))
  }

  render() {
    if (this.props.creatingTank) {
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
            create
          </button>
          <button onClick={() => this.props.dispatch(hideCreateTankWindow())}>cancel</button>
        </form>
      )
    }

    else {
      return (
        <button onClick={() => this.props.dispatch(showCreateTankWindow())}>Create</button>
      )
    }
  }
}

const mapStateToProps = state => ({
  creatingTank: state.tank.creatingTank
})

export default reduxForm({
  form: 'create',
  onSubmitFail: (errors, dispatch) => dispatch(focus('create', 'stats'))
})(connect(mapStateToProps)(CreateTank));