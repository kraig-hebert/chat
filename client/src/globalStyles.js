import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      backgroundColor: theme.mainBG.main,
    },
  },
  app: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1200px',
    height: '800px',
    padding: '0 30px',
    borderRadius: '30px',
  },
}));
