import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './friendsOptionsStyles';

const FriendsOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.friendsOptions}>FriendsOptions</div>;
};

FriendsOptions.propTypes = {};

export default FriendsOptions;
