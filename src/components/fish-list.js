import React from 'react';
import {connect} from 'react-redux';

export function FishList(props) {
  const fish = props.fish.map((fish, index) => {
    return (
      <li key={index}>
        {fish}
      </li>
    );
  });
  return (
    <ul>
      {fish}
    </ul>
  );
}

const mapStateToProps = state => ({
  fish: state.fishReducer.fish
});

export default connect(mapStateToProps)(FishList)