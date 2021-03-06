import React from 'react';
import { connect } from 'react-redux';
import { deleteLivestock } from '../../../actions/livestock';

function Fish(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    return (
      <li key={index} className='list-element livestock'>
        <div className='tank-img-container'>
          <img src={fish.img} alt='' className='tank-img' />
        </div>
        <div className='text-container'>
          <p>{fish.name}</p><p>({fish.scientificName})</p>
          <p>Added to tank on: {fish.createdAt}</p>
          <button className='tab-btn fish-btn' onClick={() => props.dispatch(deleteLivestock(fish.id))}>remove</button>
        </div>
      </li>
    )
  })

  if (filter.length > 0) {
    return (
      <ul className='tank-livestock'>
        {fish}
      </ul>
    )
  } else {
    return (
      <div className='tank-livestock'>
        <p>Tank has no fish, go to Database to add some</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock.livestock
})

export default connect(mapStateToProps)(Fish);