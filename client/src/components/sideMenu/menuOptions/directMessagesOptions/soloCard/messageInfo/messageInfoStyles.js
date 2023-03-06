import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '70%',
    height: '60%',
    '& p:first-of-type': {
      color: theme.mainBG.main,
      fontSize: '.8rem',
    },
    '& p:last-of-type': {
      color: theme.light.main,
      fontSize: '.7rem',
    },
  },
}));
