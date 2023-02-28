import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { IoSendOutline, IoSend } from 'react-icons/io5';

import TextInput from '../../../../common/textInput/TextInput';
import { useStyles } from './messageBarStyles';

const MessageBar = (props) => {
  const {} = props;
  const classes = useStyles();
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={classes.messageBar}>
      <TextInput
        width="100%"
        height="30px"
        backgroundColor={theme.secondary.main}
        textColor={theme.light.main}
        placeholder="Message"
        inputValue={inputValue}
        setInputValue={setInputValue}
        Icon={IoSend}
        FocusedIcon={IoSend}
      />
    </div>
  );
};

MessageBar.propTypes = {};

export default MessageBar;
