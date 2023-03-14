import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './userCardStyles';

const UserCard = (props) => {
  const { user } = props;
  const classes = useStyles();
  return <div className={classes.userCard}>{user.username}</div>;
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
