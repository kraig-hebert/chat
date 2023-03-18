import React from 'react';
import { useDispatch } from 'react-redux';

import Main from './components/main/Main';
import SideMenu from './components/sideMenu/SideMenu';
import { useStyles } from './globalStyles';
import { currentUser } from './data/dummyData';
import { currentUserLoaded } from './reducers/userData';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  dispatch(currentUserLoaded(currentUser));

  return (
    <div className={classes.app}>
      <SideMenu />
      <Main />
    </div>
  );
}

export default App;
