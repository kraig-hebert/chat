import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './friendsPanelStyles';

const FriendsPanel = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.friends}>Friends Panel</div>;
};

export default FriendsPanel;
