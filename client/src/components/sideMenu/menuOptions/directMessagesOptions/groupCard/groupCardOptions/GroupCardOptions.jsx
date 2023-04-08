import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IoPricetags,
  IoEye,
  IoEyeOff,
  IoOptions,
  IoPersonAdd,
} from 'react-icons/io5';

import { groupCardSettingsSelected } from '../../../../../../reducers/appSettings';
import { useStyles } from './groupCardOptionsStyles';
import CardOption from '../../../../../common/cardOption/CardOption';

const GroupCardOptions = (props) => {
  const { setShowMembers, setInputIsFocused } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGroupSettingsClick = () => dispatch(groupCardSettingsSelected());
  const handleEditTitleClick = () => setInputIsFocused(true);

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
      <CardOption
        icon={<IoPricetags />}
        title="Edit Title"
        onClick={handleEditTitleClick}
      />
      <CardOption icon={<IoPersonAdd />} title="Send Invite" />
      <CardOption
        icon={<IoOptions />}
        title="Group Settings"
        onClick={handleGroupSettingsClick}
      />
    </div>
  );
};

GroupCardOptions.propTypes = {
  setShowMembers: PropTypes.func,
  setInputIsFocused: PropTypes.func,
};

export default GroupCardOptions;
