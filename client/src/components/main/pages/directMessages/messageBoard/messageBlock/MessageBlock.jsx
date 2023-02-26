import React from 'react';
import PropTypes from 'prop-types';
import { loremIpsum } from 'lorem-ipsum';

import { useStyles } from './messageBlockStyles';

const MessageBlock = (props) => {
  const { message } = props;

  let alignItems;
  if (message.user === 'khebert24') alignItems = 'flex-start';
  else if (message.user === 'jsmith376') alignItems = 'flex-end';

  const classes = useStyles({ alignItems });

  return (
    <div className={classes.messageBlock}>
      <div className={classes.messageHeader}>
        <p>{message.user}</p>
        <p>{message.date}</p>
      </div>
      <p>{loremIpsum()}</p>
    </div>
  );
};

MessageBlock.propTypes = {
  message: PropTypes.object,
};

export default MessageBlock;
