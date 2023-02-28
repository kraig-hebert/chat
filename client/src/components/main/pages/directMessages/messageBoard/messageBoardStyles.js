import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBoardContainer: {
    width: '100%',
    margin: '10px 0',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '20px',
      height: 'auto',
    },
    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: theme.tertiary.main,
      height: '100%',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.blue.main,
      borderRadius: '5px',
      width: '10px',
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
