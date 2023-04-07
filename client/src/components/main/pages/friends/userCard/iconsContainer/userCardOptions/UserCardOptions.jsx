import React from 'react';
import PropTypes from 'prop-types';
import {
  IoPricetags,
  IoEye,
  IoEyeOff,
  IoOptions,
  IoPersonAdd,
} from 'react-icons/io5';

import { useStyles } from './userCardOptionsStyles';
import CardOption from './cardOption/CardOption';

const UserCardOptions = (props) => {
  const { setShowPopOver } = props;
  const classes = useStyles();

  const handleTestClick = () => undefined;
  return (
    <div className={classes.userCardOptions}>
      <CardOption
        icon={<IoEye />}
        swapIcon={<IoEyeOff />}
        title="Show Members"
        swapTitle="Hide Members"
        onClick={handleTestClick}
        swappable
        setShowPopOver={setShowPopOver}
      />
      <CardOption
        icon={<IoEye />}
        swapIcon={<IoEyeOff />}
        title="Show Members"
        swapTitle="Hide Members"
        onClick={handleTestClick}
        swappable
        setShowPopOver={setShowPopOver}
      />
      <CardOption
        icon={<IoEye />}
        swapIcon={<IoEyeOff />}
        title="Show Members"
        swapTitle="Hide Members"
        onClick={handleTestClick}
        swappable
        setShowPopOver={setShowPopOver}
      />
    </div>
  );
};

UserCardOptions.propTypes = {
  setShowPopOver: PropTypes.func,
};

export default UserCardOptions;
