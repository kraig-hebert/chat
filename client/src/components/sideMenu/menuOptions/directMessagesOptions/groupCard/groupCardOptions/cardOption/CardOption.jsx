import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './cardOptionStyle';

const CardOption = (props) => {
  const { icon, title, onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.cardOption} onClick={onClick}>
      {React.cloneElement(icon, { className: classes.icon })}
      <span className={classes.title}>{title}</span>
    </div>
  );
};

CardOption.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardOption;
