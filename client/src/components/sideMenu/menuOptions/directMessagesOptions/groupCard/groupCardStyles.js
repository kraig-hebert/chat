import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
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
  icon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
    margin: '0 10px',
  },
  groupTitle: {
    color: theme.mainBG.main,
    fontWeight: '700',
  },
  optionsIcon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '5px',
    fontSize: '1.25rem',
    color: theme.mainBG.main,
  },
}));
