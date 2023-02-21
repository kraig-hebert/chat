import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesStyles';
import MessageBoard from './messageBoard/MessageBoard';
import MessageBar from './messageBar/MessageBar';

const DirectMessages = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.directMessages}>
      <MessageBoard />
      <MessageBar />
    </div>
  );
};

DirectMessages.propTypes = {};

export default DirectMessages;
