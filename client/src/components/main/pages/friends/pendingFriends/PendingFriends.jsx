import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import Panel from '../../../../common/panel/Panel';
import { selectPendingFriends } from '../../../../../reducers/userData';
import { useStyles } from './pendingFriendsStyles';

const PendingFriends = (props) => {
  const {} = props;
  const classes = useStyles();

  const pendingFriends = useSelector(selectPendingFriends);

  const renderedUserCards = Object.values(pendingFriends).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  const RequestGroup = (props) => {
    return <div className={classes.requestGroup}>{props.userCard}</div>;
  };

  const incomingRequestUserCards = renderedUserCards.filter(
    (card) => card.props.user.requestDirection === 'in'
  );
  const outgoingRequestUserCards = renderedUserCards.filter(
    (card) => card.props.user.requestDirection === 'out'
  );
  return (
    <div className={classes.pendingFriends}>
      <Panel
        children={<RequestGroup userCard={incomingRequestUserCards} />}
        title="Incoming Requests"
      />
      <Panel
        children={<RequestGroup userCard={outgoingRequestUserCards} />}
        title="Outoing Requests"
      />
    </div>
  );
};

PendingFriends.propTypes = {};

export default PendingFriends;
