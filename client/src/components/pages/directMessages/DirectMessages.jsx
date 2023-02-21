import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesStyles';

const DirectMessages = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.directMessages}>DirectMessages</div>;
};

DirectMessages.propTypes = {};

export default DirectMessages;
