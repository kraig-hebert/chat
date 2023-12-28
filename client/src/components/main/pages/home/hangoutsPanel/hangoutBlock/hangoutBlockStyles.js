import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  hangoutBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.mainBG.main,
    margin: '0 10px',
    border: `1px solid ${theme.blue.main}`,
    color: theme.blue.main,
    fontSize: '.85rem',
    fontWeight: '600',
  },
  block: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    height: '40px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    cursor: 'pointer',
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
    '&:hover': {
      filter: `drop-shadow(-1px 1px 3px ${theme.mainBG.main})`,
    },
    '&:active': {
      '& div:first-of-type': {
        borderWidth: '5px',
      },
      '& span': {
        color: theme.blue.main,
      },
      backgroundColor: theme.mainBG.main,
    },
    '& span': {
      color: theme.mainBG.main,
      fontSize: '.85rem',
      fontWeight: '600',
    },
  },
}));
