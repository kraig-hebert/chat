import React from 'react';
import PropTypes from 'prop-types';
import { IoPencil, IoEye } from 'react-icons/io5';

import { useStyles } from './groupCardOptionsStyles';
import CardOption from './cardOption/CardOption';

const GroupCardOptions = (props) => {
  const { setShowMembers } = props;
  const classes = useStyles();
  return (
    <div className={classes.groupCardOptions}>
      <CardOption
        icon={<IoEye />}
        title="Show Members"
        onClick={setShowMembers}
      />
      <CardOption icon={<IoPencil />} title="Edit Title" />
    </div>
  );
};

GroupCardOptions.propTypes = {
  setShowMembers: PropTypes.func,
};

export default GroupCardOptions;
