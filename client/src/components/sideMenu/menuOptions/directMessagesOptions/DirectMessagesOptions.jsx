import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';
import MessageTypeSelector from './directMessageCard/messageTypeSelector/MessageTypeSelector';

//import dummyData for cards
import dummyData from './dummyData';

const DirectMessagesOptions = (props) => {
  const { inputValue } = props;
  const classes = useStyles();

  const [selectedType, setSelectedType] = useState('solo');

  const renderedSoloCards = dummyData.solo.map((message, index) => (
    <DirectMessageCard message={message} key={index} />
  ));
  const renderedGroupCards = dummyData.group.map((message, index) => (
    <DirectMessageCard message={message} key={index} />
  ));

  const renderCards = () => {
    if (selectedType === 'solo') {
      return renderedSoloCards.filter((card) =>
        card.props.message.title.includes(inputValue)
      );
    } else if (selectedType === 'group')
      return renderedGroupCards.filter((card) =>
        card.props.message.title.includes(inputValue)
      );
  };

  return (
    <div className={classes.directMessagesOptions}>
      <MessageTypeSelector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {renderCards()}
    </div>
  );
};

DirectMessagesOptions.propTypes = {
  inputValue: PropTypes.string,
};

export default DirectMessagesOptions;
