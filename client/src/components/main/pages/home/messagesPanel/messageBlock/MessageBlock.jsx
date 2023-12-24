import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

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
          <div className={classes.messageHeader}>
            <p>{user.username}</p>
            <p>
              Newest Message:
              <span>{format(new Date(), 'eee hh:mm:ss aaa')}</span>
            </p>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.soloType}>{blockType}</div>
        </div>
      );
    } else if (blockType === 'Group') {
      return (
        <div className={`${classes.messageBlock} ${classes.borderLeft}`}>
          <ProfilePic status="none" username={group.title} />
          <div className={classes.messageHeader}>
            <p>{group.title}</p>
            <p>
              Newest Message:
              <span>{format(new Date(), 'eee hh:mm:ss aaa')}</span>
            </p>
          </div>
          <div className={classes.divider}></div>
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
