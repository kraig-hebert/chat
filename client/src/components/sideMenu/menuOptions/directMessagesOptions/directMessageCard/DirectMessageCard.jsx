import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';
import { useStyles } from './directMessageCardStyles';
import MessageInfo from './messageInfo/MessageInfo';

const DirectMessageCard = (props) => {
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
          ? classes.activeDirectMessageCard
          : classes.directMessageCard
      }
      onClick={handleCardClick}
    >
      <IoPersonCircle className={classes.icon} />
      <MessageInfo cardData={cardData} />
    </div>
  );
};

DirectMessageCard.propTypes = {
  cardData: PropTypes.object,
};

export default DirectMessageCard;
