import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../auth/input';
import moment from 'moment'
import { required, nonEmpty } from '../../validators';
import { hideUpdateWindow, updateParameter } from '../../actions/parameters';

class Update extends React.Component {

  onSubmit(values) {
    const date = moment().format('LLL')
    this.props.dispatch(updateParameter(values.stats, this.props.category, date, this.props.id));
  }

  render() {
    return (
      <form className='param-update' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name='stats'
          type='text'
          component={Input}
          label='Stats:'
          validate={[required, nonEmpty]}
        />
        <button
          className='update-btn'
          type='submit'
          disabled={this.props.pristine || this.props.submitting}>
          Update
        </button>
        <button className='update-btn' onClick={() => this.props.dispatch(hideUpdateWindow())}>Cancel</button>
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