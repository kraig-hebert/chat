import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesStyles';
import MessageBoard from './messageBoard/MessageBoard';
import MessageInput from './messageInput/MessageInput';

const DirectMessages = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.directMessages}>
      <MessageBoard />
      <MessageInput />
    </div>
  );
};

DirectMessages.propTypes = {};

export default DirectMessages;
