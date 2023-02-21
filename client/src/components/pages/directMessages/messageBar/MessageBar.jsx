import React from 'react';
import PropTypes from 'prop-types';
import { BsBoxArrowUp } from 'react-icons/bs';

import { useStyles } from './messageBarStyles';

const MessageBar = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.messageBar}>
      <span className={classes.inputPlaceholder}>Message</span>
      <input type="text" className={classes.input} />
      <button className={classes.messageBarButton}>
        <BsBoxArrowUp className={classes.submitIcon} />
      </button>
    </div>
  );
};

MessageBar.propTypes = {};

export default MessageBar;
