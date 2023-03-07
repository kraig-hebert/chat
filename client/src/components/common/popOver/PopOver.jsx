import React from 'react';
import PropTypes from 'prop-types';

import { IoCloseCircle } from 'react-icons/io5';
import { useStyles } from './popOverStyles';

const PopOver = (props) => {
  const { showPopOver, setShowPopOver, children } = props;
  const classes = useStyles({ showPopOver });

  const handlePopOverClose = () => setShowPopOver(false);

  return (
    <div className={classes.popOverContainer} onClick={handlePopOverClose}>
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
