import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useStyles } from './messagesPanelStyles';
import MessageBlock from './messageBlock/MessageBlock';
import { selectAllFriends } from '../../../../../reducers/userData';

import { users, groups } from '../../../../../data/dummyData';

const MessagesPanel = (props) => {
  const {} = props;
  const allFriends = useSelector(selectAllFriends);

  const classes = useStyles();

  const randomize = (num) => Math.floor(Math.random() * num) + 1;

  const createMessageBlocks = () => {
    const messageBlocks = [];
    const soloTotal = randomize(3);
    const groupTotal = randomize(2);

    for (let i = 0; i < soloTotal; i++) {
      messageBlocks.push(<MessageBlock blockType="Solo" />);
    }

    for (let i = 0; i < groupTotal; i++) {
      messageBlocks.push(<MessageBlock blockType="Group" />);
    }

    const randomSpliceRemoveValue = randomize(messageBlocks.length);
    const randomSpliceAddValue = randomize(messageBlocks.length);
    const removedBlock = messageBlocks.splice(randomSpliceRemoveValue - 1, 1);
    messageBlocks.splice(randomSpliceAddValue - 1, 0, removedBlock);

    return messageBlocks;
  };

  const renderedMessageBlocks = createMessageBlocks();

  return <div className={classes.messages}>{renderedMessageBlocks}</div>;
};

MessagesPanel.propTypes = {};

export default MessagesPanel;
