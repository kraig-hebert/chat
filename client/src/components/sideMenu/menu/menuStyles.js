import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
    height: '100%',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    backgroundColor: theme.blue.main,
  },
}));
