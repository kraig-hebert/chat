import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messagesPanelStyles';

const MessagesPanel = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.messages}>Messages Panel</div>;
};

MessagesPanel.propTypes = {};

export default MessagesPanel;
