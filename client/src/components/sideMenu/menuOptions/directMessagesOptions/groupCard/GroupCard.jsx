import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IoPeopleCircle,
  IoEllipsisVertical,
  IoEllipsisVerticalOutline,
} from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';

import { useStyles } from './groupCardStyles';
import MemberList from './memberList/MemberList';
import PopOver from '../../../../common/popOver/PopOver';
import GroupCardOptions from './groupCardOptions/GroupCardOptions';

const GroupCard = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const classes = useStyles();

  const handleCardClick = () =>
    dispatch(directMessageThreadSelected(cardData.group.title));

  const [showPopOver, setShowPopOver] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const handleOptionsClick = () => setShowPopOver(true);
  return (
    <div
      className={
        cardData.group.title === activeDirectMessageThread
          ? classes.activeGroupCard
          : classes.groupCard
      }
    >
      <div className={classes.groupInfoContainer}>
        <div className={classes.groupInfo} onClick={handleCardClick}>
          <IoPeopleCircle className={classes.groupIcon} />
          <p className={classes.groupTitle}>{cardData.group.title}</p>
        </div>
        <IoEllipsisVertical
          className={classes.optionsIcon}
          onClick={handleOptionsClick}
        />
      </div>
      {showMembers && <MemberList members={cardData.group.members} />}
      <PopOver
        showPopOver={showPopOver}
        setShowPopOver={setShowPopOver}
        children={<GroupCardOptions setShowMembers={setShowMembers} />}
      />
    </div>
  );
};

GroupCard.propTypes = {
  cardData: PropTypes.object,
};

export default GroupCard;
