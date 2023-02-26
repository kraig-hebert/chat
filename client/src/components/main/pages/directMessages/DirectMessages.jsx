import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesStyles';
import MessageBoard from './messageBoard/MessageBoard';
import MessageBar from './messageBar/MessageBar';

const DirectMessages = (props) => {
  const { height } = props;
  const classes = useStyles({ height });

  return (
    <div className={classes.directMessages}>
      <MessageBoard />
      <MessageBar />
    </div>
  );
};

DirectMessages.propTypes = {
  height: PropTypes.number,
};

export default DirectMessages;
