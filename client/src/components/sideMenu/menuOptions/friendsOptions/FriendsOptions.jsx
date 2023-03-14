import React from 'react';
import PropTypes from 'prop-types';
import { IoWifi, IoAt, IoBan } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';

import { useStyles } from './friendsOptionsStyles';
import OptionCard from './optionCard/OptionCard';

const FriendsOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.friendsOptions}>
      <OptionCard title="All" icon={<IoAt />} />
      <OptionCard title="Online" icon={<IoWifi />} />
      <OptionCard title="Pending Requests" icon={<MdPendingActions />} />
      <OptionCard title="Blocked" icon={<IoBan />} />
    </div>
  );
};

FriendsOptions.propTypes = {};

export default FriendsOptions;
