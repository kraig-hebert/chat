import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';

const DirectMessagesOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.directMessagesOptions}>
      <DirectMessageCard />
    </div>
  );
};

DirectMessagesOptions.propTypes = {};

export default DirectMessagesOptions;
