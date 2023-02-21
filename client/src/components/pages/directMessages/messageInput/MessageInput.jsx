import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageInputStyles';

const MessageInput = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.messageInput}>MessageInput</div>;
};

MessageInput.propTypes = {};

export default MessageInput;
