import React from 'react';
import { connect } from 'react-redux';
import Create from '../create'
import Update from '../update'
import { showUpdateWindow } from '../../../actions/parameters';

export function Nitrate(props) {
  const filter = props.parameters.filter(parameter => parameter.category === 'nitrate');
  const parameters = filter.map((parameter, index) => {
    if (!props.updating) {
      return (
        <li key={index}>
          {parameter.category}
          <div>
            {parameter.stats}
            <p>Updated on:{parameter.updatedAt}</p>
          </div>
          <button onClick={() => props.dispatch(showUpdateWindow())}>Update</button>
        </li>
      );
    } else {
      return (
        <div key={index}>
          <Update id={parameter.id} />
        </div>
      )
    }
  });

  if (filter.length > 0) {
    return (
      <ul>
        {parameters}
      </ul>
    );
  } else {
    return (
      <Create />
    )
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters.parameters,
  updating: state.parameters.updating
});


export default connect(mapStateToProps)(Nitrate);