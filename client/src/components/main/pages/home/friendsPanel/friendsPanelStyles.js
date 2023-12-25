import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  friends: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '300px',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
    '& h2': {
      color: theme.mainBG.main,
      fontWeight: '600',
      fontSize: '1.35rem',
      marginBottom: '30px',
    },
  },
  requestGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  totalNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: theme.mainBG.main,
    borderRadius: '50%',
    fontSize: '1.5rem',
    color: theme.blue.main,
    filter: `drop-shadow(0 1px 1px ${theme.mainBG.main})`,
    cursor: 'pointer',
  },
  divider: {
    display: 'block',
    width: '10px',
    height: '85%',
    backgroundColor: theme.blue.main,
    borderRadius: '3px',
  },
}));
