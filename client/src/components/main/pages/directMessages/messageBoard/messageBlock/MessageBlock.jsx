import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { LoremIpsum } from 'lorem-ipsum';
import { format } from 'date-fns';

import { selectActiveDirectMessageThread } from '../../../../../../reducers/appSettings';
import { useStyles } from './messageBlockStyles';

const MessageBlock = (props) => {
  const { message } = props;
  const theme = useTheme();
  const activeDirectMessageThread = useSelector(
    selectActiveDirectMessageThread
  );

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
    if (message.user === 'receiver')
      return { alignItems: 'flex-start', backgroundColor: theme.tertiary.main };
    else if (message.user === 'sender')
      return { alignItems: 'flex-end', backgroundColor: theme.blue.main };
  };

  const classes = useStyles(setStyles());

  return (
    <div className={classes.messageBlock}>
      <div className={classes.messageHeader}>
        <p>
          {message.user === 'receiver'
            ? 'khebert24'
            : activeDirectMessageThread}
        </p>
        <p>{format(new Date(message.date), 'hh:mm:ss aaa MM/dd/yyyy')}</p>
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
