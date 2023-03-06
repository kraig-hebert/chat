import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';
import { useStyles } from './soloCardStyles';
import MessageInfo from './messageInfo/MessageInfo';

const SoloCard = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const classes = useStyles();

  const handleCardClick = () =>
    dispatch(directMessageThreadSelected(cardData.user));

  return (
    <div
      className={
        cardData.user === activeDirectMessageThread
          ? classes.activeSoloCard
          : classes.soloCard
      }
      onClick={handleCardClick}
    >
      <IoPersonCircle className={classes.icon} />
      <MessageInfo cardData={cardData} />
    </div>
  );
};

SoloCard.propTypes = {
  cardData: PropTypes.object,
};

export default SoloCard;
