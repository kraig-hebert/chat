import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  groupCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: '0 5px',
    marginBottom: '20px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
    '&:hover': {
      filter: `drop-shadow(-1px 1px 3px ${theme.mainBG.main})`,
    },
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
  optionsIcon: {
    fontSize: '1.8rem',
    color: theme.mainBG.main,
    cursor: 'pointer',
  },
}));
