import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import { useStyles } from './directMessageCardStyles';

const DirectMessageCard = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.directMessageCard}>
      <IoPersonCircle className={classes.icon} />
    </div>
  );
};

DirectMessageCard.propTypes = {};

export default DirectMessageCard;
