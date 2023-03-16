import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoChatbox, IoEllipsisVertical } from 'react-icons/io5';

import { userCardDirectMessageIconSelected } from '../../../../../../reducers/appSettings';
import { useStyles } from './iconsContainerStyles';

const IconsContainer = (props) => {
  const { username } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMessageIconClick = () => {
    dispatch(
      userCardDirectMessageIconSelected({
        username,
        activeMenu: 'direct-messages',
      })
    );
    navigate('/direct-messages');
  };
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

IconsContainer.propTypes = {
  username: PropTypes.string,
};

export default IconsContainer;
