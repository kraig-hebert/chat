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
  const { height } = props;
  const classes = useStyles({ height });

  return <div className={classes.messageBoard}>{renderedMessageBlocks}</div>;
};

MessageBoard.propTypes = {
  height: PropTypes.number,
};

export default MessageBoard;
