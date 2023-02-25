import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle, IoExitOutline, IoExit } from 'react-icons/io5';

import { useStyles } from './userBarStyles';

const UserBar = (props) => {
  const {} = props;
  const classes = useStyles();

  const onMouseEnter = (icon) => <icon />;
  const onMouseOut = (icon) => <icon />;

  return (
    <div className={classes.userBar}>
      <div className={classes.userContainer}>
        <IoPersonCircle className={classes.userIcon} />
        <h3 className={classes.userName}>khebert24</h3>
      </div>
      <div className={classes.actionButtons}>
        <IoExitOutline className={classes.actionIcon} />
      </div>
    </div>
  );
};

UserBar.propTypes = {};

export default UserBar;
