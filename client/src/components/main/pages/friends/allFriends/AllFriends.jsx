import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from '../userCard/UserCard';
import Panel from '../../../../common/panel/Panel';
import { selectAllFriends } from '../../../../../reducers/userData';
import { useStyles } from './allFriendsStyles';

const AllFriends = (props) => {
  const {} = props;
  const classes = useStyles();
  const friends = useSelector(selectAllFriends);

  const renderedUserCards = Object.values(friends).map((user, index) => (
    <UserCard user={user} key={index} />
  ));

  const PanelGuts = () => {
    return <div className={classes.friendsPanel}>{renderedUserCards}</div>;
  };

  return (
    <div className={classes.allFriends}>
      <Panel children={<PanelGuts />} title="All Friends" />
    </div>
  );
};

AllFriends.propTypes = {};

export default AllFriends;
