import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homeStyles';
import HomePanel from './homePanel/HomePanel';
import Messages from './messages/Messages';

const Home = (props) => {
  const { height } = props;
  const classes = useStyles({ height });

  return (
    <div className={classes.home}>
      <HomePanel children={<Messages />} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
