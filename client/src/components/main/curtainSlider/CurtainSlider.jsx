import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectCurtainSliderIsOpen,
  selectCurtainSliderComponent,
} from '../../../reducers/appSettings';
import { useStyles } from './curtainSliderStyles';

const CurtainSlider = (props) => {
  const {} = props;
  const curtainSliderIsOpen = useSelector(selectCurtainSliderIsOpen);
  const curtainSliderComponent = useSelector(selectCurtainSliderComponent);

  const classes = useStyles({ curtainSliderIsOpen });

  return <div className={classes.curtainSlider}>CurtainSlider</div>;
};

CurtainSlider.propTypes = {};

export default CurtainSlider;
