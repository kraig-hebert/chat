import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessageCardStyles';

const DirectMessageCard = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.directMessageCard}>DirectMessageCard</div>;
};

DirectMessageCard.propTypes = {};

export default DirectMessageCard;
