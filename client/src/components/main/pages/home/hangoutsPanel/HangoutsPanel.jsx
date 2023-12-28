import React from 'react';
import PropTypes from 'prop-types';
import { MdEditNote } from 'react-icons/md';

import { useStyles } from './hangoutsPanelStyles';
import HangoutBlock from './hangoutBlock/HangoutBlock';

const HangoutsPanel = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.hangouts}>
      <div className={classes.editFavorites}>
        <MdEditNote className={classes.editIcon} />
      </div>
      <HangoutBlock name="trailrunning" />
      <HangoutBlock name="hiking" />
      <HangoutBlock name="programming" />
      <HangoutBlock name="projectzomboid" />
      <HangoutBlock name="javascript" />
      <HangoutBlock name="nba" />
    </div>
  );
};

HangoutsPanel.propTypes = {};

export default HangoutsPanel;
