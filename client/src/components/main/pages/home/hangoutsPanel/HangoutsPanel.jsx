import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hangoutsPanelStyles';

const HangoutsPanel = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.hangouts}>Hangouts Panel</div>;
};

HangoutsPanel.propTypes = {};

export default HangoutsPanel;
