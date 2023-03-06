import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './cardOptionStyle';

const CardOption = (props) => {
  const { icon, title } = props;
  const classes = useStyles();
  return (
    <div className={classes.cardOption}>
      {React.cloneElement(icon, { className: classes.icon })}
      <span className={classes.title}>{title}</span>
    </div>
  );
};

CardOption.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default CardOption;
