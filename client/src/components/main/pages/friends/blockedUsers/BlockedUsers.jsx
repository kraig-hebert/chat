import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import { selectBlockedUsers } from '../../../../../reducers/userData';
import { useStyles } from './blockedUsersStyles';

const BlockedUsers = (props) => {
  const {} = props;
  const classes = useStyles();

  const blockedUsers = useSelector(selectBlockedUsers);

  const renderedUserCards = Object.values(blockedUsers).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  const incomingBlockedUserCards = renderedUserCards.filter(
    (card) => card.props.user.blockDirection === 'in'
  );
  const outgoingBlockedUserCards = renderedUserCards.filter(
    (card) => card.props.user.blockDirection === 'out'
  );

  return (
    <div className={classes.blockedUsers}>
      <div className={classes.blockedGroup}>
        <h2>Blocked By User</h2>
        {incomingBlockedUserCards}
      </div>
      <div className={classes.blockedGroup}>
        <h2>Blocked Users</h2>
        {outgoingBlockedUserCards}
      </div>
    </div>
  );
};

BlockedUsers.propTypes = {};

export default BlockedUsers;
