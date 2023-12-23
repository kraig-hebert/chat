import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageBlockStyles';
import ProfilePic from '../../../../../common/profilePic/ProfilePic';

const MessageBlock = (props) => {
  const { blockType, group, user } = props;
  const classes = useStyles();

  const buildMessageBlock = () => {
    if (blockType === 'Solo') {
      return (
        <div className={`${classes.messageBlock} ${classes.borderRight}`}>
          <ProfilePic status={user.onlineStatus} username={user.username} />

          <div className={classes.soloType}>{blockType}</div>
        </div>
      );
    } else if (blockType === 'Group') {
      return (
        <div className={`${classes.messageBlock} ${classes.borderLeft}`}>
          <ProfilePic status="none" username={group.title} />

          <div className={classes.groupType}>{blockType}</div>
        </div>
      );
    }
  };

  const renderedMessageBlock = buildMessageBlock();

  return <>{renderedMessageBlock}</>;
};

MessageBlock.propTypes = {
  blockType: PropTypes.string,
  user: PropTypes.object,
  group: PropTypes.object,
};

export default MessageBlock;
