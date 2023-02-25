import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageInfoStyles';

const MessageInfo = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.messageInfo}>MessageInfo</div>;
};

MessageInfo.propTypes = {};

export default MessageInfo;
