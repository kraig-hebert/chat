import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IoPersonCircle,
  IoExitOutline,
  IoExit,
  IoIdCardOutline,
  IoIdCard,
} from 'react-icons/io5';

import ActionIcon from './actionIcon/ActionIcon';
import CurtainSlider from '../curtainSlider/CurtainSlider';
import { useStyles } from './userBarStyles';
import { selectCurrentUser } from '../../../reducers/userData';

const UserBar = (props) => {
  const {} = props;
  const classes = useStyles();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className={classes.userBar}>
      <div className={classes.userContainer}>
        <IoPersonCircle className={classes.userIcon} />
        <h3 className={classes.userName}>{currentUser.username}</h3>
      </div>
      <div className={classes.actionButtons}>
        <ActionIcon
          icon={<IoIdCardOutline className={classes.actionIcon} />}
          hoverIcon={<IoIdCard className={classes.actionIcon} />}
        />
        <ActionIcon
          icon={<IoExitOutline className={classes.actionIcon} />}
          hoverIcon={<IoExit className={classes.actionIcon} />}
        />
      </div>
      <CurtainSlider />
    </div>
  );
};

UserBar.propTypes = {};

export default UserBar;
