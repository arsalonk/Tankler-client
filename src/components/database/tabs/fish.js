import React from 'react';
import { connect } from 'react-redux';
import { addLivestock } from '../../../actions/livestock';
import moment from 'moment';

export function Fish(props) {
  const today = moment().format('LL');
  const filter = props.database.filter(item => item.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    return (
      <li key={index} className='list-element'>
        <div className='img-container'>
          <img src={fish.img} alt='' className='db-img' />
        </div>
        <p>
          {fish.name}
        </p>
        <p>
          ({fish.scientificName})
        </p>
        <button className='create-btn' onClick={() => props.dispatch(addLivestock(fish.name, fish.scientificName, fish.grouping, fish.img, today))}>Add to tank</button>
      </li>
    )
  })

  return (
    <ul className='database-data'>
      {fish}
    </ul>
  )
}

const mapStateToProps = state => ({
  database: state.database.database,
  adding: state.livestock.adding
});

export default connect(mapStateToProps)(Fish);