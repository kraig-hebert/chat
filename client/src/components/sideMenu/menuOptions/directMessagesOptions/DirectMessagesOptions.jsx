import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';

const DirectMessagesOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.directMessagesOptions}>DirectMessagesOptions</div>
  );
};

DirectMessagesOptions.propTypes = {};

export default DirectMessagesOptions;
