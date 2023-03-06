import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: '20px',
    padding: '2px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
  },
  groupInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
  },
  activeGroupCard: {
    extend: 'groupCard',
    backgroundColor: theme.blue.main,
  },
  groupIcon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
    margin: '0 10px',
  },
  groupTitle: {
    color: theme.mainBG.main,
    fontWeight: '700',
  },
  optionsIcon: {
    fontSize: '1.5rem',
    color: theme.mainBG.main,
    cursor: 'pointer',
  },
}));
