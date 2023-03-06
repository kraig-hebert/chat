import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';

import { useStyles } from './groupCardStyles';
import MemberList from './memberList/MemberList';

const GroupCard = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const classes = useStyles();

  const handleCardClick = () =>
    dispatch(directMessageThreadSelected(cardData.group.title));

  return (
    <div
      className={
        cardData.group.title === activeDirectMessageThread
          ? classes.activeGroupCard
          : classes.groupCard
      }
      onClick={handleCardClick}
    >
      <div className={classes.cardInfo}>
        <IoPersonCircle className={classes.icon} />
        <p className={classes.groupTitle}>{cardData.group.title}</p>
      </div>
      <MemberList members={cardData.group.members} />
    </div>
  );
};

GroupCard.propTypes = {
  cardData: PropTypes.object,
};

export default GroupCard;
