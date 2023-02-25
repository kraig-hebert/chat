import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';
import MessageTypeSelector from './directMessageCard/messageTypeSelector/MessageTypeSelector';

const DirectMessagesOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.directMessagesOptions}>
      <MessageTypeSelector />
      <DirectMessageCard />
    </div>
  );
};

DirectMessagesOptions.propTypes = {};

export default DirectMessagesOptions;
