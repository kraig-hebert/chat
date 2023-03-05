import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectActiveDirectMessageThread } from '../../../../../reducers/appSettings';
import { useStyles } from './messageBoardStyles';
import MessageBlock from './messageBlock/MessageBlock';

//import dummyData for messageDisplay
import { users } from '../../../../../data/dummyData';
import { addSeconds } from 'date-fns';
const now = new Date();

const MessageBoard = (props) => {
  const {} = props;
  const classes = useStyles();
  const containerRef = useRef();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const indexOfActiveMessagethread = users.indexOf(activeDirectMessageThread);

  const isEven = (number) => number % 2 === 0;
  const setUser = (i) => {
    if (isEven(i)) {
      return users[indexOfActiveMessagethread];
    } else return 'khebert24';
  };

  const renderedMessageBlocks = [];

  for (let i = 1; i <= 8; i++) {
    const message = {
      user: setUser(i),
      date: addSeconds(now, i),
    };
    renderedMessageBlocks.push(<MessageBlock message={message} key={i} />);
  }

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [activeDirectMessageThread]);

  return (
    <div className={classes.messageBoardContainer} ref={containerRef}>
      <div className={classes.messageBoard}>{renderedMessageBlocks}</div>
    </div>
  );
};

MessageBoard.propTypes = {};

export default MessageBoard;
