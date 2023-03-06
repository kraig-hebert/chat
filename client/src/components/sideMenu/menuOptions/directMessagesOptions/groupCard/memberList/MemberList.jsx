import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './memberListStyles';

const MemberList = (props) => {
  const { members } = props;
  const classes = useStyles();

  const renderedMemberNames = members.map((member) => (
    <p className={classes.memberName}>{member}</p>
  ));

  return <div className={classes.memberList}>{renderedMemberNames}</div>;
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(String),
};
export default MemberList;
