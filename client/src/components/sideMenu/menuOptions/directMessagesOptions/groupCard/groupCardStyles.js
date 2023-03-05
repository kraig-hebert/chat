import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: '70px',
    marginBottom: '20px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activeDirectMessageCard: {
    extend: 'directMessageCard',
    backgroundColor: theme.blue.main,
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
  },
}));
