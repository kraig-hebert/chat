import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './friendsListStyles';
import { users } from '../../../../../data/dummyData';
import UserCard from './userCard/UserCard';

const FriendsList = (props) => {
  const {} = props;
  const classes = useStyles();

  const renderedUserCards = users.map((user, index) => (
    <UserCard user={user} key={index} />
  ));
  return <div className={classes.friendsList}>{renderedUserCards}</div>;
};

export default FriendsList;
