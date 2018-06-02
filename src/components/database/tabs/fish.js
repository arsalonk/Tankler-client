import React from 'react';
import { connect } from 'react-redux';

export function Fish(props) {
  const filter = props.database.filter(item => item.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    return (
      <li key={index}>
        {fish.name}
        {fish.scientificName}
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