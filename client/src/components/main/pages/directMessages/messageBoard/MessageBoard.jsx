import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectActiveDirectMessageThread } from '../../../../../reducers/appSettings';
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
  const activeDirectMessageThead = useSelector(selectActiveDirectMessageThread);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [activeDirectMessageThead]);

  return (
    <div className={classes.messageBoardContainer} ref={containerRef}>
      <div className={classes.messageBoard}>{renderedMessageBlocks}</div>
    </div>
  );
};

MessageBoard.propTypes = {};

export default MessageBoard;
