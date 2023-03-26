import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import { selectPendingFriends } from '../../../../../reducers/userData';
import { useStyles } from './pendingFriendsStyles';

const PendingFriends = (props) => {
  const {} = props;
  const classes = useStyles();

  const pendingFriends = useSelector(selectPendingFriends);

  const renderedUserCards = Object.values(pendingFriends).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  const incomingRequestUserCards = renderedUserCards.filter(
    (card) => card.props.user.requestDirection === 'in'
  );
  const outgoingRequestUserCards = renderedUserCards.filter(
    (card) => card.props.user.requestDirection === 'out'
  );
  return (
    <div className={classes.pendingFriends}>
      <div className={classes.requestGroup}>
        <h2>Incoming Requests</h2>
        {incomingRequestUserCards}
      </div>
      <div className={classes.requestGroup}>
        <h2>Outgoing Requests</h2>
        {outgoingRequestUserCards}
      </div>
    </div>
  );
};

PendingFriends.propTypes = {};

export default PendingFriends;
