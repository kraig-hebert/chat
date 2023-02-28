import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import {
  directMessageThreadSelected,
  selectActiveDirectMessageThread,
} from '../../../../../reducers/appSettings';
import { useStyles } from './directMessageCardStyles';
import MessageInfo from './messageInfo/MessageInfo';

const DirectMessageCard = (props) => {
  const { message } = props;
  const dispatch = useDispatch();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );
  const classes = useStyles();

  const handleCardClick = () =>
    dispatch(directMessageThreadSelected(message.title));

  return (
    <div
      className={
        message.title === activeDirectMessageThread
          ? classes.activeDirectMessageCard
          : classes.directMessageCard
      }
      onClick={handleCardClick}
    >
      <IoPersonCircle className={classes.icon} />
      <MessageInfo message={message} />
    </div>
  );
};

DirectMessageCard.propTypes = {
  message: PropTypes.object,
};

export default DirectMessageCard;
