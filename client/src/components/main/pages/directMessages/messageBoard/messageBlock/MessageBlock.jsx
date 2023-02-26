import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageBlockStyles';

const MessageBlock = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.messageBlock}>MessageBlock</div>;
};

export default MessageBlock;
