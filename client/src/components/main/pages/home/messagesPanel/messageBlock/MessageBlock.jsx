import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageBlockStyles';

const MessageBlock = (props) => {
  console.log(props);
  const { blockType } = props;
  const classes = useStyles();

  const setBlockType = () => {
    if (blockType === 'Solo')
      return { borderRadius: classes.borderRight, type: classes.soloType };
    else if (blockType === 'Group')
      return { borderRadius: classes.borderLeft, type: classes.groupType };
  };

  const blockStyles = setBlockType();

  console.log(blockType);

  return (
    <div className={`${classes.messageBlock} ${blockStyles.borderRadius}`}>
      block
      <div className={blockStyles.type}>{blockType}</div>
    </div>
  );
};

MessageBlock.propTypes = {
  blockType: PropTypes.string,
};

export default MessageBlock;
