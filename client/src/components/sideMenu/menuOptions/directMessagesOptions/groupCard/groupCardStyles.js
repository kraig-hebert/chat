import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: '20px',
    padding: '0 5px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
  },
  activeGroupCard: {
    extend: 'groupCard',
    backgroundColor: theme.blue.main,
  },
  groupInfoContainer: {
    display: 'flex',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  groupInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
  },
  groupIcon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
    margin: '0 5px',
  },
  optionsIcon: {
    fontSize: '2rem',
    color: theme.mainBG.main,
    cursor: 'pointer',
  },
}));
