import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messagesPanelStyles';
import SubPanel from '../homePanel/subPanel/SubPanel';

const MessagesPanel = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.messages}>
      <SubPanel title="Solo Messages" />
      <div className={classes.divider}></div>
      <SubPanel title="Group Messages" />
    </div>
  );
};

MessagesPanel.propTypes = {};

export default MessagesPanel;
