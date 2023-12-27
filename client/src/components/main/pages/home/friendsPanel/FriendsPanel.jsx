import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './friendsPanelStyles';
import {
  menuIconSelected,
  friendsOptionSelected,
} from '../../../../../reducers/appSettings';

const FriendsPanel = (props) => {
  const {} = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTotalNumberClick = () => {
    dispatch(menuIconSelected('friends'));
    dispatch(friendsOptionSelected('pending'));
    navigate('/friends/pending');
  };
  return (
    <div className={classes.friends}>
      <div className={classes.requestGroup}>
        <h2>Incoming</h2>
        <div className={classes.totalNumber} onClick={handleTotalNumberClick}>
          1
        </div>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.requestGroup}>
        <h2>Outgoing</h2>
        <div className={classes.totalNumber} onClick={handleTotalNumberClick}>
          2
        </div>
      </div>
    </div>
  );
};

export default FriendsPanel;
