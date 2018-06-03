import React from 'react';
import { connect } from 'react-redux';

export function Corals(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'corals');
  const corals = filter.map((coral, index) => {
    return (
      <li key={index}>
        <h3>{coral.grouping}</h3>
        <p>{coral.name} {coral.quantity}</p>
        <p>{coral.scientificName}</p>
      </li>
    )
  })

  return (
    <ul>
      {corals}
    </ul>
  )
}