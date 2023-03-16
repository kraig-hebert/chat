import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoChatbox, IoEllipsisVertical } from 'react-icons/io5';

import { userCardDirectMessageIconSelected } from '../../../../../../reducers/appSettings';
import { useStyles } from './iconsContainerStyles';

const IconsContainer = (props) => {
  const { username } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleMessageIconClick = () =>
    dispatch(
      userCardDirectMessageIconSelected({
        username,
        activeMenu: 'direct-messages',
      })
    );
  const handleOptionsIconClick = () => {};
  return (
    <div className={classes.iconsContainer}>
      <div className={classes.iconContainer} onClick={handleMessageIconClick}>
        <Link to={'/direct-messages'}>
          <IoChatbox className={classes.icon} />
        </Link>
      </div>
      <div className={classes.iconContainer} onClick={handleOptionsIconClick}>
        <IoEllipsisVertical className={classes.icon} />
      </div>
    </div>
  );
};

IconsContainer.propTypes = {
  username: PropTypes.string,
};

export default IconsContainer;
