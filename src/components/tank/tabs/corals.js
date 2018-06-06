import React from 'react';
import { connect } from 'react-redux';
import { deleteLivestock } from '../../../actions/livestock';

function Corals(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'corals');
  const corals = filter.map((coral, index) => {
    return (
      <li key={index} className='list-element'>
        <p>{coral.name}</p><p>({coral.scientificName})</p>
        <button onClick={() => props.dispatch(deleteLivestock(coral.id))}>remove</button>
      </li>
    )
  })

  if (filter.length > 0) {
    return (
      <ul className='tank-livestock'>
        {corals}
      </ul>
    )
  } else {
    return (
      <div className='tank-livestock'>
        <p>Tank has no corals, go to Database to add some</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock.livestock
})

export default connect(mapStateToProps)(Corals);