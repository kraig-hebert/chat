import React from 'react';
import PropTypes from 'prop-types';
import { IoChatbox, IoEllipsisVertical } from 'react-icons/io5';

import { useStyles } from './iconsContainerStyles';

const IconsContainer = (props) => {
  const {} = props;
  const classes = useStyles();

  const handleMessageIconClick = () => {};
  const handleOptionsIconClick = () => {};
  return (
    <div className={classes.iconsContainer}>
      <div className={classes.iconContainer} onClick={handleMessageIconClick}>
        <IoChatbox className={classes.icon} />
      </div>
      <div className={classes.iconContainer} onClick={handleOptionsIconClick}>
        <IoEllipsisVertical className={classes.icon} />
      </div>
    </div>
  );
};

export default IconsContainer;
