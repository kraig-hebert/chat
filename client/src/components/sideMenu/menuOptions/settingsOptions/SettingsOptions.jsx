import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './settingsOptionsStyles';

const SettingsOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.settingsOptions}>SettingsOptions</div>;
};

SettingsOptions.propTypes = {};

export default SettingsOptions;
