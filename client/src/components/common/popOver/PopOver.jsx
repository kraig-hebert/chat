import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { IoCloseCircle } from 'react-icons/io5';

import useCloseOnClickAway from '../../../hooks/useCloseOnClickAway';
import { useStyles } from './popOverStyles';

const PopOver = (props) => {
  const { showPopOver, setShowPopOver, children } = props;
  const classes = useStyles({ showPopOver });
  const popOverRef = useRef(null);

  const handlePopOverClose = () => setShowPopOver(false);

  useCloseOnClickAway(popOverRef, showPopOver, setShowPopOver);

  return (
    <div
      className={classes.popOverContainer}
      onClick={handlePopOverClose}
      ref={popOverRef}
    >
      <div className={classes.popOver}>
        {children}
        <IoCloseCircle
          className={classes.closeIcon}
          onClick={handlePopOverClose}
        />
      </div>
    </div>
  );
};

PopOver.propTypes = {
  showPopOver: PropTypes.bool,
  setShowPopOver: PropTypes.func,
  children: PropTypes.object,
};

export default PopOver;
