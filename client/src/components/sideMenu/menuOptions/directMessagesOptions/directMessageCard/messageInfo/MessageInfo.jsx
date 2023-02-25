import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { useStyles } from './messageInfoStyles';

const MessageInfo = (props) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div className={classes.messageInfo}>
      <p>{message.title}</p>
      <p>{format(new Date(message.date), 'hh:mm:ss eee dd/MM/yyyy ')}</p>
    </div>
  );
};

MessageInfo.propTypes = {
  message: PropTypes.object,
};

export default MessageInfo;
