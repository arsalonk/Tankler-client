import React from 'react';
import { connect } from 'react-redux';
import { addLivestock } from '../../../actions/livestock';

export function Fish(props) {
  const filter = props.database.filter(item => item.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    return (
      <li key={index}>
        {fish.name}
        {fish.scientificName}
        <button onClick={() => props.dispatch(addLivestock(
          fish.name, fish.scientificName, fish.grouping, 
        ))}>Add to tank</button>
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
  database: state.database.database
});

export default connect(mapStateToProps)(Fish);