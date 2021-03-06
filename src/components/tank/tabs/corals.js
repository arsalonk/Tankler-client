import React from 'react';
import { connect } from 'react-redux';
import { deleteLivestock } from '../../../actions/livestock';

function Corals(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'coral');
  const corals = filter.map((coral, index) => {
    return (
      <li key={index} className='list-element livestock'>
        <div className='tank-img-container'>
          <img src={coral.img} alt='' className='tank-img' />
        </div>
        <div className='text-container'>
          <p>{coral.name}</p><p>({coral.scientificName})</p>
          <p>Added to tank on: {coral.createdAt}</p>
          <button className='tab-btn' onClick={() => props.dispatch(deleteLivestock(coral.id))}>remove</button>
        </div>
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