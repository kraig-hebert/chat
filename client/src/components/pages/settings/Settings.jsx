import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './settingsStyles';

const Settings = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.settings}>Settings</div>;
};

Settings.propTypes = {};

export default Settings;
