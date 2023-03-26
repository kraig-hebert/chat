import React from 'react';
import PropTypes from 'prop-types';
import { IoAt, IoBan } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';

import { useStyles } from './friendsOptionsStyles';
import OptionCard from './optionCard/OptionCard';

const FriendsOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.friendsOptions}>
      <OptionCard route="all" title="All" icon={<IoAt />} />
      <OptionCard
        route="pending"
        title="Pending Requests"
        icon={<MdPendingActions />}
      />
      <OptionCard route="blocked" title="Blocked" icon={<IoBan />} />
    </div>
  );
};

FriendsOptions.propTypes = {};

export default FriendsOptions;
