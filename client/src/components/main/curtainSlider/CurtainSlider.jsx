import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  curtainSliderClosed,
  selectCurtainSliderIsOpen,
  selectCurtainSliderComponent,
} from '../../../reducers/appSettings';
import { useStyles } from './curtainSliderStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';

const CurtainSlider = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const curtainSliderIsOpen = useSelector(selectCurtainSliderIsOpen);
  const curtainSliderComponent = useSelector(selectCurtainSliderComponent);

  const classes = useStyles({ curtainSliderIsOpen });

  const handleIconClick = () => dispatch(curtainSliderClosed());

  return (
    <div className={classes.curtainSliderContainer}>
      <div className={classes.CurtainSlider}>
        <IoCloseCircleOutline
          className={classes.icon}
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

CurtainSlider.propTypes = {};

export default CurtainSlider;
