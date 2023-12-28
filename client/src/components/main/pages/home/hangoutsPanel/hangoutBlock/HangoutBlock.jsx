import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hangoutBlockStyles';

const HangoutBlock = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
    <div className={classes.hangoutBlock}>
      <div className={classes.block}>
        <div className={classes.icon}>
          {String(name).slice(0, 1).toUpperCase()}
        </div>
        <span>{`h/${name}`}</span>
      </div>
    </div>
  );
};

HangoutBlock.propTypes = {
  name: PropTypes.string,
};
export default HangoutBlock;
