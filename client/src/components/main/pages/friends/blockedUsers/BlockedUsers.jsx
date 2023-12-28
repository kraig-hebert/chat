import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import Panel from '../../../../common/panel/Panel';
import { selectBlockedUsers } from '../../../../../reducers/userData';
import { useStyles } from './blockedUsersStyles';

const BlockedUsers = (props) => {
  const {} = props;
  const classes = useStyles();

  const blockedUsers = useSelector(selectBlockedUsers);

  const renderedUserCards = Object.values(blockedUsers).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  const BlockedGroup = (props) => {
    return <div className={classes.blockedGroup}>{props.userCard}</div>;
  };

  const incomingBlockedUserCards = renderedUserCards.filter(
    (card) => card.props.user.blockDirection === 'in'
  );
  const outgoingBlockedUserCards = renderedUserCards.filter(
    (card) => card.props.user.blockDirection === 'out'
  );

  return (
    <div className={classes.blockedUsers}>
      <Panel
        children={<BlockedGroup userCard={incomingBlockedUserCards} />}
        title="Blocked by User"
      />
      <Panel
        children={<BlockedGroup userCard={outgoingBlockedUserCards} />}
        title="Blocked User"
      />
    </div>
  );
};

BlockedUsers.propTypes = {};

export default BlockedUsers;
