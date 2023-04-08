import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { IoCloseCircle } from 'react-icons/io5';

import useCloseOnClickAway from '../../../hooks/useCloseOnClickAway';
import { useStyles } from './popOverStyles';

const PopOver = (props) => {
  const { direction, showPopOver, setShowPopOver, children } = props;

  const classes = useStyles({ showPopOver, direction });
  const popOverRef = useRef(null);

  const handlePopOverClose = () => setShowPopOver(false);

  useCloseOnClickAway(popOverRef, showPopOver, setShowPopOver);

  const setPopOverDirection = () => {
    switch (direction) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'bottomRight':
        return classes.bottomRight;
    }
  };

  return (
    <div
      className={setPopOverDirection()}
      onClick={handlePopOverClose}
      ref={popOverRef}
    >
      <div className={classes.popOver}>{children}</div>
    </div>
  );
};

PopOver.propTypes = {
  directiom: PropTypes.string,
  showPopOver: PropTypes.bool,
  setShowPopOver: PropTypes.func,
  children: PropTypes.object,
};

export default PopOver;
