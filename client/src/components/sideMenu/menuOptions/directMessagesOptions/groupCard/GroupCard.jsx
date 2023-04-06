import React, { useState, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoEllipsisVerticalCircle } from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';

import { useStyles } from './groupCardStyles';
import MemberList from './memberList/MemberList';
import PopOver from '../../../../common/popOver/PopOver';
import GroupCardOptions from './groupCardOptions/GroupCardOptions';
import TitleInput from './titleInput/TitleInput';
import Badge from '../../../../common/badge/Badge';
import ProfilePic from '../../../../common/profilePic/ProfilePic';
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
  const [groupInfoHeight, setGroupInfoHeight] = useState();
  const groupInfoRef = useRef(null);
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState(cardData.group.title);

  const handleOptionsClick = () => setShowPopOver(true);

  useLayoutEffect(() => {
    setGroupInfoHeight(groupInfoRef.current.offsetHeight);
  });

  return (
    <div
      className={
        cardData.group.title === activeDirectMessageThread
          ? classes.activeGroupCard
          : classes.groupCard
      }
    >
      <div className={classes.groupInfoContainer} ref={groupInfoRef}>
        <div className={classes.groupInfo} onClick={handleCardClick}>
          <ProfilePic status="none" username={cardData.group.title} />
          <TitleInput
            groupInfoHeight={groupInfoHeight}
            inputIsFocused={inputIsFocused}
            setInputIsFocused={setInputIsFocused}
            titleInputValue={titleInputValue}
            setTitleInputValue={setTitleInputValue}
          />
        </div>
        <IoEllipsisVerticalCircle
          className={classes.optionsIcon}
          onClick={handleOptionsClick}
        />
      </div>
      {showMembers && <MemberList members={cardData.group.members} />}
      <Badge badgeCount={cardData.group.unread} />
      <PopOver
        direction="left"
        showPopOver={showPopOver}
        setShowPopOver={setShowPopOver}
        children={
          <GroupCardOptions
            setShowMembers={setShowMembers}
            inputIsFocused={inputIsFocused}
            setInputIsFocused={setInputIsFocused}
          />
        }
      />
    </div>
  );
};

GroupCard.propTypes = {
  cardData: PropTypes.object,
};

export default GroupCard;
