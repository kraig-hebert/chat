import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';
import MessageTypeSelector from './directMessageCard/messageTypeSelector/MessageTypeSelector';

//import dummyData for cards
import dummyData from './dummyData';
import { users, groups } from '../../../../data/dummyData';

const DirectMessagesOptions = (props) => {
  const { inputValue } = props;
  const classes = useStyles();

  const [selectedType, setSelectedType] = useState('solo');
  const renderCards = () => {
    if (selectedType === 'solo') {
      return users.map((user, index) => {
        const data = {
          user: user,
          date: new Date(),
        };
        return <DirectMessageCard cardData={data} key={index} />;
      });
    } else if (selectedType === 'group') {
      return groups.map((group, index) => {
        const data = {
          user: group.title,
          date: new Date(),
        };
        return <DirectMessageCard cardData={data} key={index} />;
      });
    }
  };

  const renderedGroupCards = dummyData.group.map((message, index) => (
    <DirectMessageCard message={message} key={index} />
  ));

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
