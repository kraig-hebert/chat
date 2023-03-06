import React from 'react';
import PropTypes from 'prop-types';

import { IoCloseCircle } from 'react-icons/io5';
import { useStyles } from './popOverStyles';

const PopOver = (props) => {
  const { showPopOver, setShowPopOver, children } = props;

  const classes = useStyles();

  const handleCloseClick = () => setShowPopOver(false);
  return (
    <>
      {showPopOver && (
        <div className={classes.popOverContainer}>
          <div className={classes.popOver}>
            {children}
            <IoCloseCircle
              className={classes.closeIcon}
              onClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

PopOver.propTypes = {
  showPopOver: PropTypes.bool,
  setShowPopOver: PropTypes.func,
  children: PropTypes.symbol,
};

export default PopOver;
