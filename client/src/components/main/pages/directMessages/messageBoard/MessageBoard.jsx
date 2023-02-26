import React from 'react';
import PropTypes from 'prop-types';
import { loremIpsum } from 'lorem-ipsum';

import { useStyles } from './messageBoardStyles';

//import dummyData for messageDisplay
import dummyData from './dummyData';

const MessageBoard = (props) => {
  const { height } = props;
  const classes = useStyles({ height });

  console.log(loremIpsum());

  return <div className={classes.messageBoard}>MessageBoard</div>;
};

MessageBoard.propTypes = {
  height: PropTypes.number,
};

export default MessageBoard;
