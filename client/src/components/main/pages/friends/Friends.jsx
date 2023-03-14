import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';

import { useStyles } from './friendsStyles';
import TextInput from '../../../common/textInput/TextInput';
import FriendsList from './friendsList/FriendsList';

const Friends = (props) => {
  const { height } = props;
  const classes = useStyles({ height });
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={classes.friends}>
      <TextInput
        width="100%"
        height="30px"
        backgroundColor={theme.tertiary.main}
        textColor={theme.mainBG.main}
        placeholder="Search Friends"
        inputValue={inputValue}
        setInputValue={setInputValue}
        Icon={IoSearchCircleOutline}
        FocusedIcon={IoSearchCircle}
      />
      <FriendsList />
    </div>
  );
};

Friends.propTypes = {
  height: PropTypes.number,
};

export default Friends;
