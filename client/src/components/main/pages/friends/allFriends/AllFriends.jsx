import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import { selectAllFriends } from '../../../../../reducers/userData';
import { useStyles } from './allFriendsStyles';

const AllFriends = (props) => {
  const {} = props;
  const classes = useStyles();
  const friends = useSelector(selectAllFriends);

  const renderedUserCards = Object.values(friends).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  return <div className={classes.allFriends}>{renderedUserCards}</div>;
};

AllFriends.propTypes = {};

export default AllFriends;
