import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoChatbox, IoEllipsisVertical } from 'react-icons/io5';

import { userCardDirectMessageIconSelected } from '../../../../../../reducers/appSettings';
import { useStyles } from './iconsContainerStyles';
import PopOver from '../../../../../common/popOver/PopOver';
import UserCardOptions from './userCardOptions/UserCardOptions';

const IconsContainer = (props) => {
  const { user } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopOver, setShowPopOver] = useState(false);
  const handleOptionsClick = () => setShowPopOver(true);

  const handleMessageIconClick = () => {
    if (user.friendStatus !== 'friend') return;
    dispatch(
      userCardDirectMessageIconSelected({
        username: user.username,
        activeMenu: 'direct-messages',
      })
    );
    navigate('/direct-messages');
  };

  return (
    <div className={classes.iconsContainer}>
      <div
        className={
          user.friendStatus === 'friend'
            ? classes.activeIcon
            : classes.disabledIcon
        }
        onClick={handleMessageIconClick}
      >
        <IoChatbox />
      </div>
      <div className={classes.activeIcon} onClick={handleOptionsClick}>
        <IoEllipsisVertical />
      </div>
      <PopOver
        direction="right"
        showPopOver={showPopOver}
        setShowPopOver={setShowPopOver}
        children={<UserCardOptions setShowPopOver={setShowPopOver} />}
      />
    </div>
  );
};

IconsContainer.propTypes = {
  user: PropTypes.object,
};

export default IconsContainer;
