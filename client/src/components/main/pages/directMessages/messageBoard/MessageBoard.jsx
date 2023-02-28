import React, { useRef, useEffect } from 'react';
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
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, []);
  return (
    <div className={classes.messageBoardContainer} ref={containerRef}>
      <div className={classes.messageBoard}>{renderedMessageBlocks}</div>
    </div>
  );
};

MessageBoard.propTypes = {};

export default MessageBoard;
