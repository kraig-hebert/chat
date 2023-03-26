import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import { selectPendingFriends } from '../../../../../reducers/userData';
import { useStyles } from './pendingFriendsStyles';

const PendingFriends = (props) => {
  const {} = props;
  const classes = useStyles();
  console.log('pending');

  const pendingFriends = useSelector(selectPendingFriends);

  const renderedUserCards = Object.values(pendingFriends).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  return <div className={classes.pendingFriends}>{renderedUserCards}</div>;
};

PendingFriends.propTypes = {};

export default PendingFriends;
