import React from 'react';
import { connect } from 'react-redux';
import { addLivestock, showAddingWindow } from '../../../actions/livestock';
import moment from 'moment';
import Add from '../../livestock/add';

export function Fish(props) {
  const today = moment().format('LL');
  const filter = props.database.filter(item => item.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    return (
      <li key={index} className='list-element'>
        <p>
          {fish.name}
          ({fish.scientificName})
        </p>
        <button onClick={() => props.dispatch(addLivestock(fish.name, fish.scientificName, fish.grouping, today))}>Add to tank</button>
      </li>
    )
  })

  return (
    <ul>
      {fish}
    </ul>
  )
}

const mapStateToProps = state => ({
  database: state.database.database,
  adding: state.livestock.adding
});

export default connect(mapStateToProps)(Fish);