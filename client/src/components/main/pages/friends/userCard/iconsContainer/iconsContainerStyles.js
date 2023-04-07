import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  iconsContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    '& *': {
      color: theme.mainBG.main,
      fontSize: '1.5rem',
    },
  },
  activeIcon: {
    extend: 'icon',
    backgroundColor: theme.tertiary.main,
    '&:hover': {
      backgroundColor: theme.tertiary.quarterAlpha,
      '&.first-child': {
        color: theme.secondary.main,
      },
    },
  },
  disabledIcon: {
    extend: 'icon',
    backgroundColor: theme.secondary.main,
    cursor: 'default',
    '& *': {
      color: theme.tertiary.quarterAlpha,
    },
  },
  testChild: {},
}));
