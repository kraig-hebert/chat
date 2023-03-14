import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  friendsList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    marginTop: '10px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: theme.tertiary.main,
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.blue.main,
      borderRadius: '2px',
    },
  },
}));
