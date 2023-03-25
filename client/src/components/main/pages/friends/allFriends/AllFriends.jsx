import React from 'react';
import PropTypes from 'prop-types';

import { users } from '../../../../../data/dummyData';

import UserCard from '../userCard/UserCard';
import { useStyles } from './allFriendsStyles';

const AllFriends = (props) => {
  const {} = props;
  const classes = useStyles();

  const renderedUserCards = users.map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  return <div className={classes.allFriends}>{renderedUserCards}</div>;
};

AllFriends.propTypes = {};

export default AllFriends;
