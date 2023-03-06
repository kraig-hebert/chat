import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginBottom: '20px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activeGroupCard: {
    extend: 'groupCard',
    backgroundColor: theme.blue.main,
  },
  cardInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    borderBottom: `2px solid ${theme.mainBG.main}`,
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
  },
  groupTitle: {
    color: theme.mainBG.main,
    fontWeight: '700',
  },
}));
