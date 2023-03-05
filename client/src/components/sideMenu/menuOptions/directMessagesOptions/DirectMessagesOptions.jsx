import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './directMessagesOptionsStyles';
import DirectMessageCard from './directMessageCard/DirectMessageCard';
import GroupCard from './groupCard/GroupCard';
import MessageTypeSelector from './messageTypeSelector/MessageTypeSelector';

//import dummyData for cards
import { users, groups } from '../../../../data/dummyData';

const DirectMessagesOptions = (props) => {
  const { inputValue } = props;
  const classes = useStyles();

  const [selectedType, setSelectedType] = useState('solo');
  const renderCards = () => {
    if (selectedType === 'solo') {
      return users
        .filter((user) => user.startsWith(inputValue))
        .map((user, index) => {
          const data = {
            type: 'solo',
            user,
            date: new Date(),
          };
          return <DirectMessageCard cardData={data} key={index} />;
        });
    } else if (selectedType === 'group') {
      return groups
        .filter((group) => group.title.startsWith(inputValue))
        .map((group, index) => {
          const data = {
            type: 'group',
            group,
            date: new Date(),
          };
          return <GroupCard cardData={data} key={index} />;
        });
    }
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
