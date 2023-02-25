import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageTypeSelector: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    backgroundColor: theme.blue.main,
    margin: '10px 0',
    height: '25px',
    borderRadius: '5px',
    '& span': {
      fontSize: '.8rem',
      fontWeight: '600',
      color: theme.mainBG.main,
    },
  },
  selectorThumb: {
    position: 'absolute',
    left: '3px',
    width: '75px',
    height: '20px',
    borderRadius: '3px',
    backgroundColor: theme.mainBG.main,
  },
}));
