import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  selectActiveFriendsOption,
  friendsOptionSelected,
} from '../../../../../reducers/appSettings';
import { useStyles } from './optionCardStyles';

const OptionCard = (props) => {
  const { route, icon, title } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeFriendsOption = useSelector(selectActiveFriendsOption);

  const handleOptionClick = () => {
    dispatch(friendsOptionSelected(route));
    navigate(`/friends/${route}`);
  };
  return (
    <div
      className={
        route === activeFriendsOption ? classes.activeCard : classes.optionCard
      }
      onClick={handleOptionClick}
    >
      {React.cloneElement(icon, { className: classes.icon })}
      <p>{title}</p>
    </div>
  );
};

OptionCard.propTypes = {
  route: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string,
};

export default OptionCard;
