import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import { useStyles } from './profilePicStyles';

const ProfilePic = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.profilePicContainer}>
      <IoPersonCircle className={classes.profilePic} />
      <div className={classes.statusBadge}></div>
    </div>
  );
};

export default ProfilePic;
