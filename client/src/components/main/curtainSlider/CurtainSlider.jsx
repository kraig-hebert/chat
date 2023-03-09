import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './curtainSliderStyles';

const CurtainSlider = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.curtainSlider}>CurtainSlider</div>;
};

CurtainSlider.propTypes = {};

export default CurtainSlider;
