import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './profilePicStyles';

const ProfilePic = (props) => {
  const { status, username } = props;

  const badgeColorOptions = {
    online: 'green',
    asleep: 'yellow',
    offline: 'red',
  };

  const classes = useStyles({ badgeColor: badgeColorOptions[status] });
  return (
    <div className={classes.profilePicContainer}>
      <div className={classes.profilePic}>
        <h3>{username.charAt(0).toUpperCase()}</h3>
      </div>
      <div className={classes.statusBadge}></div>
    </div>
  );
};

ProfilePic.propTypes = {
  status: PropTypes.string,
  username: PropTypes.string,
};

export default ProfilePic;
