import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../auth/input';
import { required, nonEmpty } from '../../validators';
import { updateLivestock, hideUpdateWindow } from '../../actions/livestock';

class Add extends React.Component {

  onSubmit(values) {
    const prop = this.props;
    this.props.dispatch(updateLivestock(prop.name, prop.scientificName, values.nickname, prop.grouping, prop.id))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name='nickname'
          type='text'
          component={Input}
          label='Add a nickname?'
          validate={[required, nonEmpty]}
        />
        <button
          type='submit'
          disabled={this.props.pristine || this.props.submitting}>
          add to tank
        </button>
        <button onClick={() => this.props.dispatch(hideUpdateWindow())}>cancel</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'add',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'name'))
})(connect()(Add));