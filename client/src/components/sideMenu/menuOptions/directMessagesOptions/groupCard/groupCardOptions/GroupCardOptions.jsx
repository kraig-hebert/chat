import React from 'react';
import PropTypes from 'prop-types';
import { IoPencil, IoEye } from 'react-icons/io5';

import { useStyles } from './groupCardOptionsStyles';
import CardOption from './cardOption/CardOption';

const GroupCardOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.groupCardOptions}>
      <CardOption icon={<IoEye />} title="Show Members" />
      <CardOption icon={<IoPencil />} title="Edit Title" />
    </div>
  );
};

GroupCardOptions.propTypes = {};

export default GroupCardOptions;
