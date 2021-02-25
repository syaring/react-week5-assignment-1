import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setClicked } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const { regions, clicked } = useSelector((state) => ({
    regions: state.regions,
    clicked: state.clicked,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setClicked({ region: event.target.name }));
  };

  return (
    <Buttons
      buttons={regions}
      handleClick={handleClick}
      clickedName={clicked.region}
    />
  );
}
