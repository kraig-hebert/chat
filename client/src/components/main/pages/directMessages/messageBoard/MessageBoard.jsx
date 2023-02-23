import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageBoardStyles';

const MessageBoard = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.messageBoard}>MessageBoard</div>;
};

MessageBoard.propTypes = {};

export default MessageBoard;
