import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './cardOptionStyle';

const CardOption = (props) => {
  const { icon, swapIcon, title, swapTitle, onClick, swappable } = props;
  const classes = useStyles();
  const [isSwapped, setIsSwapped] = useState(false);

  const setOption = () => {
    if (!isSwapped) {
      return (
        <>
          {React.cloneElement(icon, { className: classes.icon })}
          <span className={classes.title}>{title}</span>
        </>
      );
    } else if (isSwapped)
      return (
        <>
          {React.cloneElement(swapIcon, { className: classes.icon })}
          <span className={classes.title}>{swapTitle}</span>
        </>
      );
  };

  const handleClick = () => {
    if (swappable) {
      setIsSwapped((prev) => !prev);
      onClick((prev) => !prev);
    } else onClick();
  };

  return (
    <div className={classes.cardOption} onClick={handleClick}>
      {setOption()}
    </div>
  );
};

CardOption.propTypes = {
  icon: PropTypes.object,
  swapIcon: PropTypes.object,
  title: PropTypes.string,
  swapTitle: PropTypes.string,
  onClick: PropTypes.func,
  swappable: PropTypes.bool,
};

CardOption.defaultProps = {
  swappable: false,
};

export default CardOption;
