import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  pendingFriends: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: '10px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: '5px',

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
  requestGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
    width: '100%',
    paddingTop: '15px',
  },
}));
