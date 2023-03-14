import React from 'react';
import { useSelector, useDis, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectActiveFriendsOption,
  friendsOptionSelected,
} from '../../../../../reducers/appSettings';
import { useStyles } from './optionCardStyles';

const OptionCard = (props) => {
  const { icon, title } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeFriendsOption = useSelector(selectActiveFriendsOption);

  const handleOptionClick = () => dispatch(friendsOptionSelected(title));
  return (
    <div
      className={
        title === activeFriendsOption ? classes.activeCard : classes.optionCard
      }
      onClick={handleOptionClick}
    >
      {React.cloneElement(icon, { className: classes.icon })}
      <p>{title}</p>
    </div>
  );
};

OptionCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};

export default OptionCard;
