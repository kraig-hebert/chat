import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessageOptionsStyles';

const DirectMessageOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.directMessageOptions}>DirectMessageOptions</div>
  );
};

DirectMessageOptions.propTypes = {};

export default DirectMessageOptions;
