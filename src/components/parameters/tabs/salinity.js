import React from 'react';
import { connect } from 'react-redux';
import Create from '../create'
import Update from '../update'
import { showUpdateWindow } from '../../../actions/parameters';
import '../parameters.css';

export function Salinity(props) {
  const category = 'salinity';
  const filter = props.parameters.filter(parameter => parameter.category === 'salinity');
  const parameters = filter.map((parameter, index) => {
    if (!props.updating) {
      return (
        <li key={index} className='list-element'>
          <h3>{parameter.category}</h3>
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
          <Update category={parameter.category} id={parameter.id} />
        </div>
      )
    }
  });

  if (filter.length > 0) {
    return (
      <ul className='tank-parameters'>
        {parameters}
      </ul>
    );
  } else {
    return (
      <div className='tank-parameters'>
        <Create category={category} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters.parameters,
  updating: state.parameters.updating
});


export default connect(mapStateToProps)(Salinity);