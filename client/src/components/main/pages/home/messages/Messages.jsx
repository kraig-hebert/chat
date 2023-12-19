import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messages';

const Messages = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.messages}>Messages</div>;
};

export default Messages;
