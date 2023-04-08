import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';
import { useStyles } from './soloCardStyles';
import MessageInfo from './messageInfo/MessageInfo';
import ProfilePic from '../../../../common/profilePic/ProfilePic';
import Badge from '../../../../common/badge/Badge';
import PopOver from '../../../../common/popOver/PopOver';
import SoloCardOptions from './soloCardOptions/SoloCardOptions';
import { IoEllipsisVerticalCircle } from 'react-icons/io5';

const SoloCard = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const classes = useStyles();

  const [showPopOver, setShowPopOver] = useState(false);

  const handleCardClick = () =>
    dispatch(directMessageThreadSelected(cardData.user.username));

  const handleOptionsClick = (event) => {
    event.preventDefault();
    setShowPopOver(true);
  };

  return (
    <div
      className={
        cardData.user.username === activeDirectMessageThread
          ? classes.activeSoloCard
          : classes.soloCard
      }
      onClick={handleCardClick}
    >
      <ProfilePic
        status={cardData.user.onlineStatus}
        username={cardData.user.username}
      />
      <MessageInfo cardData={cardData} />
      <Badge badgeCount={Math.floor(Math.random() * 6)} />
      <IoEllipsisVerticalCircle
        className={classes.icon}
        onClick={handleOptionsClick}
      />
      <PopOver
        direction="right"
        showPopOver={showPopOver}
        setShowPopOver={setShowPopOver}
        children={<SoloCardOptions />}
      />
    </div>
  );
};

SoloCard.propTypes = {
  cardData: PropTypes.object,
};

export default SoloCard;
