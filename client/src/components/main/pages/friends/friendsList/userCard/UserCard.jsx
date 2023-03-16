import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import { useStyles } from './userCardStyles';

const UserCard = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <div className={classes.userCard}>
      <IoPersonCircle className={classes.icon} />
      <div className={classes.userInfo}>
        <p>{user.username}</p>
        <p>{`${user.firstName} ${user.lastName}`}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
