import React from 'react';
import PropTypes from 'prop-types';
import { IoPencil, IoEye, IoEyeOutline, IoPersonAdd } from 'react-icons/io5';

import { useStyles } from './groupCardOptionsStyles';
import CardOption from './cardOption/CardOption';

const GroupCardOptions = (props) => {
  const { setShowMembers } = props;
  const classes = useStyles();
  return (
    <div className={classes.groupCardOptions}>
      <CardOption
        icon={<IoEyeOutline />}
        swapIcon={<IoEye />}
        title="Show Members"
        swapTitle="Hide Members"
        onClick={setShowMembers}
        swappable={true}
      />
      <CardOption icon={<IoPencil />} title="Edit Title" />
      <CardOption icon={<IoPersonAdd />} title="Send Invite" />
    </div>
  );
};

GroupCardOptions.propTypes = {
  setShowMembers: PropTypes.func,
};

export default GroupCardOptions;
