import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { useStyles } from './messageInfoStyles';

const MessageInfo = (props) => {
  const { cardData } = props;
  const classes = useStyles();

  return (
    <div className={classes.messageInfo}>
      <p>{cardData.user}</p>
      <p>{format(new Date(cardData.date), 'hh:mm:ss eee dd/MM/yyyy ')}</p>
    </div>
  );
};

MessageInfo.propTypes = {
  cardData: PropTypes.object,
};

export default MessageInfo;
