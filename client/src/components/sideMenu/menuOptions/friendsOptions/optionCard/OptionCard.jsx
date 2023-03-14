import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './optionCardStyles';

const OptionCard = (props) => {
  const { icon, title } = props;
  console.log(icon);
  const classes = useStyles();
  return (
    <div className={classes.optionCard}>
      {React.cloneElement(icon, { className: classes.icon })}
      <p>{title}</p>
    </div>
  );
};

OptionCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};

export default OptionCard;
