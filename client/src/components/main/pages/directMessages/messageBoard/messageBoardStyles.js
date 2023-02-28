import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBoardContainer: {
    width: '100%',
    height: '100%',
    margin: '10px 0',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: theme.tertiary.main,
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.blue.main,
      borderRadius: '5px',
    },
  },
  messageBoard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: '10px 5px',
  },
}));
