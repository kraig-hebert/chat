import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageBoardStyles';
import MessageBlock from './messageBlock/MessageBlock';

//import dummyData for messageDisplay
import dummyData from './dummyData';

const renderedMessageBlocks = dummyData.messages.map((message, index) => (
  <MessageBlock message={message} key={index} />
));

const MessageBoard = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.messageBoardContainer}>
      <div className={classes.messageBoard}>{renderedMessageBlocks}</div>
    </div>
  );
};

MessageBoard.propTypes = {};

export default MessageBoard;
