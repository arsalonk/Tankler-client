import React from 'react';
import { connect } from 'react-redux';
import { addLivestock } from '../../../actions/livestock';
import moment from 'moment';

export function Invertebrates(props) {
  const today = moment().format('LL');
  const filter = props.database.filter(item => item.grouping === 'invertebrate');
  const invertebrates = filter.map((invertebrate, index) => {
    return (
      <li key={index} className='list-element'>
        <p>
          {invertebrate.name}
        </p>
        <p>
          ({invertebrate.scientificName})
        </p>
        <button className='create-btn' onClick={() => props.dispatch(addLivestock(invertebrate.name, invertebrate.scientificName, invertebrate.grouping, today))}>Add to tank</button>
      </li>
    )
  })

  return (
    <ul className='database-data'>
      {invertebrates}
    </ul>
  )
}

const mapStateToProps = state => ({
  database: state.database.database,
  adding: state.livestock.adding
});

export default connect(mapStateToProps)(Invertebrates);