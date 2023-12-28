import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  userCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    padding: '5px',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userNames: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '& p': {
      '&:first-of-type': {
        color: theme.mainBG.main,
        fontSize: '.8rem',
        fontWeight: '600',
      },
      '&:last-of-type': {
        color: theme.light.main,
        fontSize: '.6rem',
      },
    },
  },
}));
