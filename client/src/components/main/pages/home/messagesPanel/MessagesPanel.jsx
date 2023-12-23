import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messagesPanelStyles';
import MessageBlock from './messageBlock/MessageBlock';

import { users, groups } from '../../../../../data/dummyData';

const MessagesPanel = (props) => {
  const {} = props;
  const classes = useStyles();

  const randomize = (num) => Math.floor(Math.random() * num) + 1;

  const createMessageBlocks = () => {
    const messageBlocks = [];
    const soloTotal = randomize(3);
    let soloStart = 0;
    if (soloTotal === 3) soloStart = randomize(5);
    else soloStart = randomize(6);
    const groupTotal = randomize(2);
    const groupStart = randomize(2) - 1;
    let idCounter = 1;
    for (let i = 0; i < soloTotal; i++) {
      const user = users[soloStart - 1 + i];
      messageBlocks.push(
        <MessageBlock key={idCounter} blockType="Solo" user={user} />
      );
      idCounter++;
    }

    for (let i = 0; i < groupTotal; i++) {
      const group = groups[i];
      messageBlocks.push(
        <MessageBlock key={idCounter} blockType="Group" group={group} />
      );
      idCounter++;
    }

    // randomize list order 10 times
    for (let i = 0; i < 10; i++) {
      const randomSpliceRemoveValue = randomize(messageBlocks.length);
      const randomSpliceAddValue = randomize(messageBlocks.length);
      const removedBlock = messageBlocks.splice(randomSpliceRemoveValue - 1, 1);
      messageBlocks.splice(randomSpliceAddValue - 1, 0, removedBlock);
    }

    return messageBlocks;
  };

  const renderedMessageBlocks = createMessageBlocks();

  return <div className={classes.messages}>{renderedMessageBlocks}</div>;
};

MessagesPanel.propTypes = {};

export default MessagesPanel;
