import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoPerson } from 'react-icons/io5';
import PropTypes from 'prop-types';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../../reducers/appSettings';

import { useStyles } from './memberListStyles';
import { selectAllUsers } from '../../../../../../reducers/userData';

const MemberList = (props) => {
  const { members } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const allUsers = useSelector(selectAllUsers);
  const handleClick = (e) => {
    dispatch(directMessageThreadSelected(e.target.innerText));
  };

  const setIsActive = (username) => {
    if (activeDirectMessageThread === username) return classes.activeMember;
    else return classes.memberName;
  };

  const renderedMemberNames = members.map((member, index) => {
    return (
      <div
        className={setIsActive(allUsers[member].username)}
        key={index}
        onClick={handleClick}
      >
        <div className={classes[allUsers[member].onlineStatus]}></div>
        {allUsers[member].username}
      </div>
    );
  });

  return <div className={classes.memberList}>{renderedMemberNames}</div>;
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(String),
};
export default MemberList;
