import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  userBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    backgroundColor: theme.secondary.main,
    padding: '0 10px',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userIcon: {
    color: theme.mainBG.main,
    fontSize: '2rem',
    marginRight: '10px',
  },
  userName: {
    color: theme.tertiary.main,
    fontSize: '1.25rem',
    fontWeight: '400',
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  actionIcon: {
    color: theme.mainBG.main,
    fontSize: '2rem',
    cursor: 'pointer',
    '&:active': {
      color: theme.blue.main,
    },
    '&:last-of-type': {
      marginLeft: '10px',
    },
  },
}));
