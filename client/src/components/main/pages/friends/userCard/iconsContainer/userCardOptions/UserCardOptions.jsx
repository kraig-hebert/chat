import React from 'react';
import PropTypes from 'prop-types';
import { IoIdCard, IoWarning } from 'react-icons/io5';
import { SiAdblock } from 'react-icons/si';

import { useStyles } from './userCardOptionsStyles';
import CardOption from '../../../../../../common/cardOption/CardOption';

const UserCardOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  const handleTestClick = () => undefined;
  return (
    <div className={classes.userCardOptions}>
      <CardOption
        icon={<IoIdCard />}
        title="Profile"
        onClick={handleTestClick}
      />
      <CardOption
        icon={<SiAdblock />}
        title="Block User"
        onClick={handleTestClick}
      />
      <CardOption
        icon={<IoWarning />}
        title="Report User"
        onClick={handleTestClick}
      />
    </div>
  );
};

UserCardOptions.propTypes = {};

export default UserCardOptions;
