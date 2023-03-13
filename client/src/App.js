import React from 'react';

import Main from './components/main/Main';
import SideMenu from './components/sideMenu/SideMenu';
import { useStyles } from './globalStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <SideMenu />
      <Main />
    </div>
  );
}

export default App;
