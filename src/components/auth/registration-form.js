import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../../actions/users';
import { login } from '../../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../../validators';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <h1 className='form-title'>Tankler</h1>
        <Field
          label='Username'
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <Field
          label='Password'
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <Field
          label='Confirm password'
          component={Input}
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          className='form-btn'
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
