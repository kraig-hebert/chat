import React from 'react';
import { IoPerson } from 'react-icons/io5';
import PropTypes from 'prop-types';

import { useStyles } from './memberListStyles';

const MemberList = (props) => {
  const { members } = props;
  const classes = useStyles();

  const renderedMemberNames = members.map((member, index) => (
    <div className={classes.memberName} key={index}>
      <IoPerson className={classes.icon} />
      {member}
    </div>
  ));

  return <div className={classes.memberList}>{renderedMemberNames}</div>;
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(String),
};
export default MemberList;
