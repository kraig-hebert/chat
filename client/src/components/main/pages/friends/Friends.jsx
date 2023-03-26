import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';

import { useStyles } from './friendsStyles';
import TextInput from '../../../common/textInput/TextInput';
import AllFriends from './allFriends/AllFriends';
import PendingFriends from './pendingFriends/PendingFriends';
import BlockedUsers from './blockedUsers/BlockedUsers';

const Friends = (props) => {
  const { height } = props;
  const { type } = useParams();
  const classes = useStyles({ height });
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  let renderedFriendsList;
  switch (type) {
    case 'all': {
      renderedFriendsList = <AllFriends />;
      break;
    }
    case 'pending': {
      renderedFriendsList = <PendingFriends />;
      break;
    }
    case 'blocked': {
      renderedFriendsList = <BlockedUsers />;
      break;
    }
    default: {
      renderedFriendsList = <AllFriends />;
      break;
    }
  }
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
      {renderedFriendsList}
    </div>
  );
};

Friends.propTypes = {
  height: PropTypes.number,
};

export default Friends;
