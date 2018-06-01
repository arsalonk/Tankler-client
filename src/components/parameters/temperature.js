import React from 'react';
import { connect } from 'react-redux';

export function Temperature(props) {
  const filter = props.parameters.filter(parameter => parameter.category === 'temperature');
  const parameters = filter.map((parameter, index) => {
    return (
      <li key={index}>
        {parameter.stats}
      </li>
    );
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

export default connect(mapStateToProps)(Temperature);