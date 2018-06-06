import React from 'react';
import { connect } from 'react-redux';
import { deleteLivestock, updateLivestock } from '../../../actions/livestock';

function Invertebrates(props) {
  const filter = props.livestock.filter(livestock => livestock.grouping === 'invertebrates');
  const invertebrates = filter.map((invertebrate, index) => {
    return (
      <li key={index} className='list-element'>
        <p>{invertebrate.name}</p><p>({invertebrate.scientificName})</p>
        <button onClick={() => props.dispatch(updateLivestock())}>nickname</button>
        <button onClick={() => props.dispatch(deleteLivestock(invertebrate.id))}>remove</button>
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