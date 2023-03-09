import React from 'react';
import PropTypes from 'prop-types';
import {
  IoPricetags,
  IoEyeOff,
  IoEye,
  IoPersonAdd,
  IoOptions,
} from 'react-icons/io5';

import { useStyles } from './groupCardOptionsStyles';
import CardOption from './cardOption/CardOption';

const GroupCardOptions = (props) => {
  const { setShowMembers } = props;
  const classes = useStyles();
  return (
    <div className={classes.groupCardOptions}>
      <CardOption
        icon={<IoEye />}
        swapIcon={<IoEyeOff />}
        title="Show Members"
        swapTitle="Hide Members"
        onClick={setShowMembers}
        swappable
      />
      <CardOption icon={<IoPricetags />} title="Edit Title" />
      <CardOption icon={<IoPersonAdd />} title="Send Invite" />
      <CardOption icon={<IoOptions />} title="Group Settings" />
    </div>
  );
};

GroupCardOptions.propTypes = {
  setShowMembers: PropTypes.func,
};

export default GroupCardOptions;
