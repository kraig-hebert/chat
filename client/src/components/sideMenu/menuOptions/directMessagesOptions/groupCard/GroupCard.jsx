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

  const [showOptions, setShowOptions] = useState(false);
  const handleOptionsClick = () => setShowOptions(true);
  return (
    <div
      className={
        cardData.group.title === activeDirectMessageThread
          ? classes.activeGroupCard
          : classes.groupCard
      }
    >
      <div className={classes.groupInfo} onClick={handleCardClick}>
        <IoPeopleCircle className={classes.groupIcon} />
        <p className={classes.groupTitle}>{cardData.group.title}</p>
      </div>
      <IoEllipsisVertical
        className={classes.optionsIcon}
        onClick={handleOptionsClick}
      />
      <PopOver
        showPopOver={showOptions}
        setShowPopOver={setShowOptions}
        children={<GroupCardOptions />}
      />
      {/* <MemberList members={cardData.group.members} /> */}
    </div>
  );
};

GroupCard.propTypes = {
  cardData: PropTypes.object,
};

export default GroupCard;
