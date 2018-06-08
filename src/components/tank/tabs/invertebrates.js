import React from 'react';
import { connect } from 'react-redux';
import { deleteLivestock } from '../../../actions/livestock';

function Invertebrates(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'invertebrate');
  const invertebrates = filter.map((invertebrate, index) => {
    return (
      <li key={index} className='list-element livestock'>
        <div className='tank-img-container'>
          <img src={invertebrate.img} alt='' className='tank-img' />
        </div>
        <div className='text-container'>
          <p>{invertebrate.name}</p><p>({invertebrate.scientificName})</p>
          <p>Added to tank on: {invertebrate.createdAt}</p>
          <button className='tab-btn' onClick={() => props.dispatch(deleteLivestock(invertebrate.id))}>remove</button>
        </div>
      </li>
    )
  })

  if (filter.length > 0) {
    return (
      <ul className='tank-livestock'>
        {invertebrates}
      </ul>
    )
  } else {
    return (
      <div className='tank-livestock'>
        <p>Tank has no invertebrates, go to Database to add some</p>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  livestock: state.livestock.livestock
})

export default connect(mapStateToProps)(Invertebrates);