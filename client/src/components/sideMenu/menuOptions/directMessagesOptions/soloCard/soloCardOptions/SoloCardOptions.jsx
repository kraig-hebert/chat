import React from 'react';
import PropTypes from 'prop-types';
import { IoIdCard, IoWarning, IoVolumeMute } from 'react-icons/io5';
import { SiAdblock } from 'react-icons/si';

import { useStyles } from './soloCardOptionsStyles';
import CardOption from '../../../../../common/cardOption/CardOption';

const SoloCardOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  const handleTestClick = () => undefined;
  return (
    <div className={classes.soloCardOptions}>
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
