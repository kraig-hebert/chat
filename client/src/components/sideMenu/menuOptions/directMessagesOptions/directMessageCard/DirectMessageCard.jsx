import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import { useStyles } from './directMessageCardStyles';
import MessageInfo from './messageInfo/MessageInfo';

const DirectMessageCard = (props) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div className={classes.directMessageCard}>
      <IoPersonCircle className={classes.icon} />
      <MessageInfo message={message} />
    </div>
  );
};

DirectMessageCard.propTypes = {
  message: PropTypes.object,
};

export default DirectMessageCard;
