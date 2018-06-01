import React from 'react';
import { connect } from 'react-redux';
import { putParameters } from '../../actions/parameters';

export function Alkalinity(props) {
  console.log(props)
  let cancel;
  const filter = props.parameters.filter(parameter => parameter.category === 'alkalinity');
  const parameters = filter.map((parameter, index) => {
    if (filter.length === 0) {
      return (
        <button onClick={() => this.props.dispatch(putParameters(parameter.id))}>Create</button>
      );
    } else {
      return (
        <li key={index}>
          {parameter.stats}
          <button onClick={() => this.props.dispatch(putParameters(parameter.id))}>Update</button>
        </li>
      );
    }
  });

  return (
    <ul>
      {parameters}
    </ul>
  );
}

const mapStateToProps = state => ({
  parameters: state.parameters.parameters
});

export default connect(mapStateToProps)(Alkalinity);