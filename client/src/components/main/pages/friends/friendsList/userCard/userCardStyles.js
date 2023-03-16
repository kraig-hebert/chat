import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  userCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    padding: '5px',
    borderBottom: `1px solid ${theme.tertiary.halfAlpha}`,
  },
  icon: {
    marginRight: '10px',
    color: theme.tertiary.main,
    fontSize: '2rem',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '& p': {
      '&:first-of-type': {
        color: theme.tertiary.main,
        fontSize: '.8rem',
      },
      '&:last-of-type': {
        color: theme.light.main,
        fontSize: '.6rem',
      },
    },
  },
}));
