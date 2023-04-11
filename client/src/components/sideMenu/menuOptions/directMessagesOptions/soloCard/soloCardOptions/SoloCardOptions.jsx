import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { IoIdCard, IoWarning, IoVolumeMute } from 'react-icons/io5';
import { SiAdblock } from 'react-icons/si';

import { useStyles } from './soloCardOptionsStyles';
import CardOption from '../../../../../common/cardOption/CardOption';
import { userProfileOptionSelected } from '../../../../../../reducers/appSettings';

const SoloCardOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleTestClick = () => undefined;
  const handleUserProfileClick = () => dispatch(userProfileOptionSelected());
  return (
    <div className={classes.soloCardOptions}>
      <CardOption
        icon={<IoIdCard />}
        title="Profile"
        onClick={handleUserProfileClick}
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
      <CardOption
        icon={<IoVolumeMute />}
        title="Mute Notifications"
        onClick={handleTestClick}
      />
    </div>
  );
};

SoloCardOptions.propsTypes = {};

export default SoloCardOptions;
