import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageTypeSelectorStyles';

const MessageTypeSelector = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.messageTypeSelector}>
      <span>Solo</span>
      <span>Group</span>
      <div className={classes.selectorThumb}></div>
    </div>
  );
};

MessageTypeSelector.propTypes = {};

export default MessageTypeSelector;
