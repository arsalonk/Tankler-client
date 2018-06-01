import React from 'react';
import { connect } from 'react-redux';

export function Calcium(props) {
  const filter = props.parameters.filter(parameter => parameter.category === 'calcium');
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

export default connect(mapStateToProps)(Calcium);