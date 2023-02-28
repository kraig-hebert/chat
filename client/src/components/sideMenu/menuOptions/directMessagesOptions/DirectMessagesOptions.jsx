import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { directMessageThreadSelected } from '../../../../reducers/appSettings';
import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';
import MessageTypeSelector from './directMessageCard/messageTypeSelector/MessageTypeSelector';

//import dummyData for cards
import dummyData from './dummyData';

const DirectMessagesOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedType, setSelectedType] = useState('solo');

  const renderedSoloCards = dummyData.solo.map((message, index) => (
    <DirectMessageCard message={message} key={index} />
  ));
  const renderedGroupCards = dummyData.group.map((message, index) => (
    <DirectMessageCard message={message} key={index} />
  ));

  const renderCards = () => {
    if (selectedType === 'solo') return renderedSoloCards;
    else if (selectedType === 'group') return renderedGroupCards;
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

DirectMessagesOptions.propTypes = {};

export default DirectMessagesOptions;
