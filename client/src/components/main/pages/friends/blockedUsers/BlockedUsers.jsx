import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import { selectBlockedUsers } from '../../../../../reducers/userData';
import { useStyles } from './blockedUsersStyles';

const BlockedUsers = (props) => {
  const {} = props;
  const classes = useStyles();
  console.log('pending');

  const blockedUsers = useSelector(selectBlockedUsers);

  const renderedUserCards = Object.values(blockedUsers).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  return <div className={classes.blockedUsers}>{renderedUserCards}</div>;
};

BlockedUsers.propTypes = {};

export default BlockedUsers;
