import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../auth/input';
import {required, nonEmpty} from '../../validators';
import { addLivestock } from '../../actions/livestock';

class Add extends React.Component {

  onSubmit(values) {
    const prop = this.props;
    this.props.dispatch(addLivestock(prop.name, prop.scientificName, prop.grouping, values.quantity))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name='quantity'
          type='number'
          component={Input}
          label='Quantity:'
          validate={[required, nonEmpty]}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'add',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'name'))
})(connect()(Add));