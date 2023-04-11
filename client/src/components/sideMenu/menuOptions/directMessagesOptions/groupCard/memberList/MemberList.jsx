import React from 'react';
import { useSelector } from 'react-redux';
import { IoPerson } from 'react-icons/io5';
import PropTypes from 'prop-types';

import { useStyles } from './memberListStyles';
import { selectAllUsers } from '../../../../../../reducers/userData';

const MemberList = (props) => {
  const { members } = props;
  const classes = useStyles();
  const allUsers = useSelector(selectAllUsers);

  const renderedMemberNames = members.map((member, index) => {
    console.log(allUsers[member]);
    return (
      <div className={classes.memberName} key={index}>
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
