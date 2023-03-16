import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import { useStyles } from './profilePicStyles';

const ProfilePic = (props) => {
  const { status } = props;

  const badgeColorOptions = {
    online: 'green',
    asleep: 'yellow',
    offline: 'red',
  };

  const classes = useStyles({ badgeColor: badgeColorOptions[status] });
  return (
    <div className={classes.profilePicContainer}>
      <IoPersonCircle className={classes.profilePic} />
      <div className={classes.statusBadge}></div>
    </div>
  );
};

ProfilePic.propTypes = {
  status: PropTypes.string,
};

export default ProfilePic;
