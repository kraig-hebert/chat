import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { LoremIpsum } from 'lorem-ipsum';

import { useStyles } from './messageBlockStyles';

const MessageBlock = (props) => {
  const { message } = props;
  const theme = useTheme();

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 1,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const setStyles = () => {
    if (message.user === 'khebert24')
      return { alignItems: 'flex-start', backgroundColor: theme.tertiary.main };
    else if (message.user === 'jsmith376')
      return { alignItems: 'flex-end', backgroundColor: theme.blue.main };
  };

  const classes = useStyles(setStyles());

  return (
    <div className={classes.messageBlock}>
      <div className={classes.messageHeader}>
        <p>{message.user}</p>
        <p>{message.date}</p>
      </div>
      <div className={classes.messageText}>
        <p>{lorem.generateParagraphs(1)}</p>
      </div>
    </div>
  );
};

MessageBlock.propTypes = {
  message: PropTypes.object,
};

export default MessageBlock;
