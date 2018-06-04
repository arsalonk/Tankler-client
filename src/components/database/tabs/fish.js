import React from 'react';
import { connect } from 'react-redux';
import { addLivestock, showAddingWindow } from '../../../actions/livestock';
import Add from '../../livestock/add';

export function Fish(props) {
  const filter = props.database.filter(item => item.grouping === 'fish');
  const fish = filter.map((fish, index) => {
    // if (!props.adding) {
      return (
        <li key={index} className='list-element'>
          <p>
            {fish.name}
            ({fish.scientificName})
          </p>
          <button onClick={() => props.dispatch(addLivestock(fish.name, fish.scientificName, fish.grouping))}>Add to tank</button>
          {/* <button onClick={() => props.dispatch(showAddingWindow())}>Add to tank</button> */}
        </li>
      )
    // } else {
      // return (
      //   <div>
      //     <Add
      //       name={fish.name}
      //       scientificName={fish.scientificName}
      //       grouping={fish.grouping}
      //     />
      //   </div>
      // )
    // }
  })

  return (
    <ul>
      {fish}
    </ul>
  )
}

const mapStateToProps = state => ({
  database: state.database.database,
  adding: state.livestock.adding
});

export default connect(mapStateToProps)(Fish);