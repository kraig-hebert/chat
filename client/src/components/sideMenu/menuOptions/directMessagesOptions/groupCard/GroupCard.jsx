import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IoPersonCircle,
  IoEllipsisVertical,
  IoEllipsisVerticalOutline,
} from 'react-icons/io5';

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

  const handleOptionsClick = () => {};
  return (
    <div
      className={
        cardData.group.title === activeDirectMessageThread
          ? classes.activeGroupCard
          : classes.groupCard
      }
      onClick={handleCardClick}
    >
      <IoPersonCircle className={classes.icon} />
      <p className={classes.groupTitle}>{cardData.group.title}</p>
      <IoEllipsisVertical
        className={classes.optionsIcon}
        onClick={handleOptionsClick}
      />
      {/* <MemberList members={cardData.group.members} /> */}
    </div>
  );
};

GroupCard.propTypes = {
  cardData: PropTypes.object,
};

export default GroupCard;
