import React from 'react';
import { connect } from 'react-redux';
import { addLivestock } from '../../../actions/livestock';
import moment from 'moment';

export function Corals(props) {
  const today = moment().format('LL');
  const filter = props.database.filter(item => item.grouping === 'coral');
  const corals = filter.map((coral, index) => {
    return (
      <li key={index} className='list-element'>
        <div className='img-container'>
          <img src={coral.img} alt='' className='db-img' />
        </div>
        <p>
          {coral.name}
        </p>
        <p>
          ({coral.scientificName})
        </p>
        <button className='create-btn' onClick={() => props.dispatch(addLivestock(coral.name, coral.scientificName, coral.grouping, coral.img, today))}>Add to tank</button>
      </li>
    )
  })

  return (
    <ul className='database-data'>
      {corals}
    </ul>
  )
}

const mapStateToProps = state => ({
  database: state.database.database,
  adding: state.livestock.adding
});

export default connect(mapStateToProps)(Corals);