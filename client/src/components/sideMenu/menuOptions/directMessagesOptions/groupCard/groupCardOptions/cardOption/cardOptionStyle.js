import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  cardOption: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '2px 2px',
    padding: '5px 10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dark.quarterAlpha,
    },
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '1.25rem',
    marginRight: '10px',
  },
  title: {
    color: theme.mainBG.main,
    fontSize: '.75rem',
    fontWeight: '600',
  },
}));
