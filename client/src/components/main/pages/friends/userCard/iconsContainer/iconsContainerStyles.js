import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
  iconContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.tertiary.main,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.tertiary.quarterAlpha,
      '& *': {
        color: theme.secondary.main,
      },
    },
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '1.5rem',
  },
}));
