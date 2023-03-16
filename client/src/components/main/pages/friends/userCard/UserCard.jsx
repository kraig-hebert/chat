import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './userCardStyles';
import ProfilePic from './profilePic/ProfilePic';

const UserCard = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <div className={classes.userCard}>
      <div className={classes.userInfo}>
        <ProfilePic status={user.onlineStatus} />
        <div className={classes.userNames}>
          <p>{user.username}</p>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
