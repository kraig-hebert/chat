import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './userCardStyles';
import ProfilePic from './profilePic/ProfilePic';
import IconsContainer from './iconsContainer/IconsContainer';

const UserCard = (props) => {
  const { user } = props;
  console.log(user);
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
      <IconsContainer username-={user.username} />
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
