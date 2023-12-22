import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messagesPanelStyles';
import MessageBlock from './messageBlock/MessageBlock';

const MessagesPanel = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.messages}>
      <MessageBlock blockType="Solo" />
      <MessageBlock blockType="Group" />
    </div>
  );
};

MessagesPanel.propTypes = {};

export default MessagesPanel;
