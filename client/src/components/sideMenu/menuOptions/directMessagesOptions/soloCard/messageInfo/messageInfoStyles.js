import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '70%',
    height: '70%',
    '& p:first-of-type': {
      color: theme.mainBG.main,
      fontSize: '.8rem',
      fontWeight: '700',
    },
    '& p:last-of-type': {
      color: theme.light.main,
      fontSize: '.55rem',
      '& span': {
        fontSize: '.6rem',
        color: theme.mainBG.main,
      },
    },
  },
}));
